import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
  QueryList,
  OnDestroy,
} from '@angular/core';
import { MdbOptionComponent, MDB_OPTION_PARENT } from './mdb-option.component';
import { ISelectedOption } from '../interfaces/selected-option.interface';
import { Observable, Subject, merge } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { document, window } from '../../../free/utils/facade/browser';
import { Utils } from './../../../free/utils/utils.class';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import { DOWN_ARROW, ENTER, ESCAPE, UP_ARROW } from '../../../free/utils/keyboard-navigation';

export type AutocompleteDropdownPosition = 'below' | 'above' | 'auto';

@Component({
  selector: 'mdb-auto-completer',
  templateUrl: 'mdb-auto-completer.component.html',
  styleUrls: ['./../auto-completer-module.scss'],
  encapsulation: ViewEncapsulation.None,
  exportAs: 'mdbAutoCompleter',
  providers: [{ provide: MDB_OPTION_PARENT, useExisting: MdbAutoCompleterComponent }],
})
export class MdbAutoCompleterComponent implements AfterContentInit, OnDestroy {
  @Input() textNoResults: string;
  @Input() clearButton = true;
  @Input() clearButtonTabIndex = 0;
  @Input() appendToBody: boolean;
  @Input() dropdownPosition: AutocompleteDropdownPosition = 'auto';
  @Input() disabled: boolean;

  @Input()
  get visibleOptions(): number {
    return this._visibleOptions;
  }

  set visibleOptions(value: number) {
    if (value !== 0) {
      this._visibleOptions = value;
    }
  }

  _visibleOptions: number;

  @Input()
  get optionHeight(): any {
    return this._optionHeight;
  }

  set optionHeight(value: any) {
    if (value !== 0) {
      this._optionHeight = value;
    }
  }

  _optionHeight = 45;

  @Input()
  get dropdownHeight(): number {
    return this._dropdownHeight;
  }

  set dropdownHeight(value: number) {
    if (value !== 0) {
      this._dropdownHeight = value;
    }
  }

  // equal to 4 * optionHeight (which is 45 by default)
  _dropdownHeight = 180;

  @Input() displayValue: ((value: any) => string) | null;
  @Output() select: EventEmitter<{ text: string; element: any }> = new EventEmitter<{
    text: string;
    element: any;
  }>();
  @Output() selected: EventEmitter<{ text: string; element: any }> = new EventEmitter<{
    text: string;
    element: any;
  }>();
  @ContentChildren(MdbOptionComponent, { descendants: true, read: ElementRef })
  optionList: Array<any>;
  @ContentChildren(MdbOptionComponent, { descendants: true })
  mdbOptions: QueryList<MdbOptionComponent>;

  @ViewChild('dropdown') dropdown: ElementRef;
  @ViewChild('noResults') noResultsEl: ElementRef;

  private _destroy = new Subject<void>();

  private utils: Utils = new Utils();

  origin: ElementRef;

  public parameters: {
    left: number;
    top: number;
    width: number;
    bottom: number;
    inputHeight: number;
  };

  readonly _isDropdownOpen: Subject<any> = new Subject<any>();

  private _allItems: Array<any> = [];
  private _isOpen = false;
  private _selectedItemIndex = -1;
  private _selectedItem: ISelectedOption;
  private _selectedItemChanged: Subject<any> = new Subject<any>();
  private _isBrowser = false;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) platformId: string
  ) {
    this._isBrowser = isPlatformBrowser(platformId);
    this.renderer.addClass(this.el.nativeElement, 'mdb-auto-completer');
  }

  private _listenToOptionClick() {
    this.mdbOptions.changes
      .pipe(
        startWith(this.mdbOptions),
        switchMap((options: QueryList<MdbOptionComponent>) => {
          return merge(...options.map((option: MdbOptionComponent) => option.click$));
        }),
        takeUntil(this._destroy)
      )
      .subscribe((clickedOption: MdbOptionComponent) => this._handleOptionClick(clickedOption));
  }

  private _handleOptionClick(option: MdbOptionComponent) {
    this.setSelectedItem({ text: option.value, element: option });
    this.highlightRow(0);
    this.select.emit({ text: option.value, element: option });
    this.selected.emit({ text: option.value, element: option });
  }

  public setSelectedItem(item: ISelectedOption) {
    this._selectedItem = item;
    this._selectedItemChanged.next(this.getSelectedItem());
  }

  public getSelectedItem() {
    return this._selectedItem;
  }

  public selectedItemChanged(): Observable<any> {
    return this._selectedItemChanged;
  }

  public isOpen() {
    return this._isOpen;
  }

  public _calculatePosition() {
    const modalEl = this.utils.getClosestEl(this.el.nativeElement, '.modal-dialog');
    const style = document.querySelector('.completer-dropdown')
      ? window.getComputedStyle(document.querySelector('.completer-dropdown'))
      : null;
    if (!style) {
      return;
    }
    const height = ['height', 'padding-top', 'padding-bottom', 'margin-top', 'margin-bottom']
      .map(key => parseInt(style.getPropertyValue(key), 10))
      .reduce((prev, cur) => prev + cur);

    const topRect = document.querySelector('.completer-dropdown').getBoundingClientRect().top;
    const bottom = modalEl ? window.innerHeight - height - topRect : this.parameters.bottom;
    const canOpenBelow = this.dropdown.nativeElement.clientHeight <= bottom;

    const belowPosition = this.parameters.inputHeight + 3;
    const abovePosition = `-${this.dropdown.nativeElement.clientHeight}`;

    let top;

    if (this.dropdownPosition === 'auto') {
      top = canOpenBelow ? belowPosition : abovePosition;
    } else if (this.dropdownPosition === 'below') {
      top = belowPosition;
    } else if (this.dropdownPosition === 'above') {
      top = abovePosition;
    }

    this.renderer.setStyle(this.dropdown.nativeElement, 'top', top + 'px');
    this.renderer.setStyle(this.dropdown.nativeElement, 'left', 0 + 'px');
    this.renderer.setStyle(this.dropdown.nativeElement, 'width', this.parameters.width + 'px');
  }

  private _calculateAppendPosition() {
    if (this._isBrowser) {
      setTimeout(() => {
        const originRect: ClientRect = this.origin.nativeElement.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const offsetTop = originRect.top + scrollTop;
        const height = originRect.height;
        const dropdownHeight = this.dropdown.nativeElement.offsetHeight;
        const inputMargin = 8;

        let top = 0;
        let left = 0;

        left = originRect.left;

        const canOpenBelow =
          offsetTop + dropdownHeight + height + inputMargin <=
          scrollTop + document.documentElement.clientHeight;
        const belowPosition = offsetTop + height + inputMargin;
        const abovePosition = (top = offsetTop - dropdownHeight - inputMargin);

        if (this.dropdownPosition === 'auto') {
          top = canOpenBelow ? belowPosition : abovePosition;
        } else if (this.dropdownPosition === 'below') {
          top = belowPosition;
        } else if (this.dropdownPosition === 'above') {
          top = abovePosition;
        }

        this.renderer.setStyle(this.dropdown.nativeElement, 'top', top + 'px');
        this.renderer.setStyle(this.dropdown.nativeElement, 'left', left + 'px');
        this.renderer.setStyle(this.dropdown.nativeElement, 'width', this.parameters.width + 'px');
      }, 0);
    }
  }

  public show() {
    if (!this.disabled) {
      this._isOpen = true;
      this._isDropdownOpen.next(this.isOpen());
    }

    setTimeout(() => {
      if (this.dropdown && !this.appendToBody) {
        this._calculatePosition();
      }

      if (this.dropdown && this.appendToBody) {
        this._calculateAppendPosition();
      }
    }, 0);
  }

  public hide() {
    if (!this.disabled) {
      this._isOpen = false;
      this._isDropdownOpen.next(this.isOpen());
    }
  }

  public isDropdownOpen(): Observable<any> {
    return this._isDropdownOpen;
  }

  removeHighlight(index: number) {
    setTimeout(() => {
      this.optionList.forEach((el: any, i: number) => {
        const completerRow = el.nativeElement.querySelectorAll('.completer-row');
        if (i === index) {
          this.renderer.addClass(el.nativeElement.firstElementChild, 'highlight-row');
        } else if (i !== index) {
          completerRow.forEach((elem: any) => {
            this.renderer.removeClass(elem, 'highlight-row');
          });
        }
      });
    }, 0);
  }

  highlightRow(index: number) {
    this._allItems = this.optionList
      .filter(el => el.nativeElement.firstElementChild.classList.contains('completer-row'))
      .map(elem => elem.nativeElement);

    if (this._allItems[index]) {
      this.optionList.forEach((el: any, i: number) => {
        const completerRow = el.nativeElement.querySelectorAll('.completer-row');

        if (index === i) {
          this.removeHighlight(index);
          this.renderer.addClass(completerRow[completerRow.length - 1], 'highlight-row');
        }
      });
    }
    this._selectedItemIndex = index;
  }

  navigateUsingKeyboard(event: any) {
    if (this.dropdown) {
      switch (event.keyCode) {
        case DOWN_ARROW:
          event.preventDefault();
          this.moveHighlightedIntoView(event.key);

          if (!this.isOpen()) {
            this.show();
          }

          if (this._selectedItemIndex + 1 <= this._allItems.length - 1) {
            this.highlightRow(++this._selectedItemIndex);
          } else if (this._selectedItemIndex + 1 === this._allItems.length) {
            this.highlightRow(0);
          }

          if (this._selectedItemIndex === 0) {
            this.highlightRow(0);
          }

          const selectedElement: any = this.mdbOptions.find(
            (el: any, index: number) => el && index === this._selectedItemIndex
          );
          if (selectedElement) {
            this.select.emit({ text: selectedElement.value, element: selectedElement });
          }

          break;
        case UP_ARROW:
          event.preventDefault();
          this.moveHighlightedIntoView(event.key);
          if (this._selectedItemIndex === -1 || this._selectedItemIndex === 0) {
            const lastItemIndex = this.mdbOptions.length;
            this.highlightRow(lastItemIndex);
          }
          this.highlightRow(--this._selectedItemIndex);

          const selectedItem: any = this.mdbOptions.find(
            (el: any, index: number) => el && index === this._selectedItemIndex
          );
          if (selectedItem) {
            this.select.emit({ text: selectedItem.value, element: selectedItem });
          }

          break;
        case ESCAPE:
          event.preventDefault();
          this.hide();
          break;
        case ENTER:
          event.preventDefault();

          const selectedOption = this.mdbOptions.map(el => el)[this._selectedItemIndex];
          if (selectedOption) {
            this.setSelectedItem({ text: selectedOption.value, element: selectedOption });
            this.select.emit({ text: selectedOption.value, element: selectedOption });
            this.selected.emit({ text: selectedOption.value, element: selectedOption });
          }
          this.hide();
          break;
      }
    }
  }

  moveHighlightedIntoView(type: string) {
    let listHeight = 0;
    let itemIndex = this._selectedItemIndex;

    this.optionList.forEach((el: any) => {
      listHeight += el.nativeElement.offsetHeight;
    });

    if (itemIndex > -1) {
      let itemHeight = 0;

      this.optionList.forEach((el: ElementRef, i: number) => {
        if (i === itemIndex + 1) {
          itemHeight = el.nativeElement.firstElementChild.clientHeight;
        }
      });

      const itemTop = (itemIndex + 1) * itemHeight;
      const viewTop = this.dropdown.nativeElement.scrollTop;
      const viewBottom = viewTop + listHeight;

      if (type === 'ArrowDown') {
        this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', itemTop - itemHeight);
      } else if (type === 'ArrowUp') {
        if (itemIndex === 0) {
          itemIndex = this.optionList.length - 1;
        } else {
          itemIndex--;
        }

        if (itemIndex === this._allItems.length - 2) {
          this.renderer.setProperty(
            this.dropdown.nativeElement,
            'scrollTop',
            viewBottom - itemHeight
          );
        } else {
          this.renderer.setProperty(
            this.dropdown.nativeElement,
            'scrollTop',
            itemIndex * itemHeight
          );
        }
      }
    }
  }

  updatePosition(parameters: { left: number; top: number; width: number; bottom: number }) {
    setTimeout(() => {
      if (this.dropdown) {
        const top =
          this.dropdown.nativeElement.clientHeight > parameters.bottom
            ? parameters.top - this.dropdown.nativeElement.clientHeight
            : parameters.top;
        this.renderer.setStyle(this.dropdown.nativeElement, 'top', top + 'px');
        this.renderer.setStyle(this.dropdown.nativeElement, 'left', parameters.left + 'px');
        this.renderer.setStyle(this.dropdown.nativeElement, 'width', parameters.width + 'px');
      }
    }, 0);
  }

  public appendDropdown() {
    if (this._isBrowser && this.appendToBody) {
      const body = document.querySelector('body');
      const dropdown = this.el.nativeElement;

      if (body) {
        this.renderer.appendChild(body, dropdown);
        this._calculateAppendPosition();
      }
    }
  }

  public setSingleOptionHeight() {
    this.mdbOptions.forEach(option => {
      option._optionHeight = this._optionHeight;
    });
  }

  ngAfterContentInit() {
    this._listenToOptionClick();
    this.highlightRow(0);
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }
}
