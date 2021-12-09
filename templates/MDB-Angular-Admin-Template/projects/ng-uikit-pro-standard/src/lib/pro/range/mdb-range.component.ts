import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
  HostListener,
  forwardRef,
  AfterViewInit,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

export const RANGE_VALUE_ACCESOR: any = {
  provide: NG_VALUE_ACCESSOR,
  // tslint:disable-next-line: no-use-before-declare
  useExisting: forwardRef(() => MdbRangeInputComponent),
  multi: true,
};

@Component({
  selector: 'mdb-range-input',
  templateUrl: './mdb-range.component.html',
  styleUrls: ['./range-module.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RANGE_VALUE_ACCESOR],
})
export class MdbRangeInputComponent implements ControlValueAccessor, AfterViewInit {
  @ViewChild('input') input: ElementRef;
  @ViewChild('rangeCloud') rangeCloud: ElementRef;
  @ViewChild('rangeField') rangeField: ElementRef;

  @Input() id: string;
  @Input() required: boolean;
  @Input() name: string;
  @Input() value: string;
  @Input() disabled: boolean;
  @Input() min = 0;
  @Input() max = 100;
  @Input() step: number;
  @Input() default: boolean;
  @Input() defaultRangeCounterClass: string;

  @Output() rangeValueChange = new EventEmitter<any>();

  range: any = 0;
  stepLength: number;
  steps: number;
  cloudRange = 0;
  visibility = false;

  @HostListener('change', ['$event']) onchange(event: any) {
    this.onChange(event.target.value);
  }

  @HostListener('input', ['$event']) oninput(event: any) {
    const value: number = +event.target.value;
    this.rangeValueChange.emit({ value: value });
    this.focusRangeInput();
    if (this.checkIfSafari()) {
      this.focusRangeInput();
    }
  }

  // @HostListener('mousedown') onclick() {
  //   this.focusRangeInput();
  // }

  // @HostListener('touchstart') onTouchStart() {
  //   this.focusRangeInput();
  // }

  // @HostListener('mouseup') onmouseup() {
  //   this.blurRangeInput();
  // }

  constructor(private renderer: Renderer2, private cdRef: ChangeDetectorRef) {}

  focusRangeInput() {
    // this.input.nativeElement.focus();
    this.visibility = true;
  }

  blurRangeInput() {
    this.input.nativeElement.blur();
    this.visibility = false;
  }

  coverage(event: any, value?: any) {
    if (typeof this.range === 'string' && this.range.length !== 0) {
      return this.range;
    }

    if (!this.default) {
      // if `coverage()` is called by (input) event take value as event.target.value. If it's called manually, take value from parameter.
      // This is needed in situation, when slider value is set by default or ReactiveForms, and value clound is not moved to proper position
      const newValue = event.target ? event.target.value : value;
      const newRelativeGain = newValue - this.min;
      const inputWidth = this.input.nativeElement.offsetWidth;

      let thumbOffset: number;
      const offsetAmmount = 15;
      const distanceFromMiddle = newRelativeGain - this.steps / 2;

      this.stepLength = inputWidth / this.steps;

      thumbOffset = (distanceFromMiddle / this.steps) * offsetAmmount;
      this.cloudRange = this.stepLength * newRelativeGain - thumbOffset;

      this.renderer.setStyle(this.rangeCloud.nativeElement, 'left', this.cloudRange + 'px');
    }
  }

  checkIfSafari() {
    const isSafari = navigator.userAgent.indexOf('Safari') > -1;
    const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
    const isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
    const isOpera = navigator.userAgent.indexOf('Opera') > -1;

    if (isSafari && !isChrome && !isFirefox && !isOpera) {
      return true;
    } else {
      return false;
    }
  }

  ngAfterViewInit() {
    this.steps = this.max - this.min;

    if (this.value) {
      this.range = Number(this.value);

      // fix(slider): resolve problem with not moving slider cloud when setting value with [value] or reactive forms
      // Manual call the coverage method to move range value cloud to proper position based on the `value` variable
      this.coverage(new Event('input'), this.value);

      this.cdRef.detectChanges();
    }
  }

  // Control Value Accessor Methods
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
    this.range = Number(this.value);
    this.cdRef.markForCheck();

    // fix(slider): resolve problem with not moving slider cloud when setting value with [value] or reactive forms
    // Manual call the coverage method to move range value cloud to proper position based on the `value` variable
    setTimeout(() => {
      this.coverage(new Event('input'), value);
    }, 0);
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
