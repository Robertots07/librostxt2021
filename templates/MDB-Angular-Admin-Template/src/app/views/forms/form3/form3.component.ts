import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-form3',
    templateUrl: './form3.component.html',
    styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {
    validatingForm: FormGroup;

    ngOnInit() {
        this.validatingForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            required: new FormControl(null, Validators.required)
        });
    }

    get input() {
        return this.validatingForm.get('email');
    }

    get input2() {
        return this.validatingForm.get('required');
    }

}
