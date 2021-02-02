import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-front-end-one',
  template: `
    <div [formGroup]="form">
      <input type="text" formControlName="firstname" />
      <input type="text" formControlName="age" />
      <input type="text" formControlName="lastname" />
      <input type="text" formControlName="twitter" />
    </div>
    <pre>{{ form.value | json}}</pre>
  `
})
export class FrontEndOneComponent implements OnInit {

  form: FormGroup;
  person = {
    firstname: 'Coder',
    age: 25,
    lastname: 'Byte',
    twitter: '@coderbyte'
  };
  personProps = [];

  ngOnInit() {
    const formDataObj = {};
    for (const prop of Object.keys(this.person)) {
      formDataObj[prop] = new FormControl(this.person[prop]);
      this.personProps.push(prop);
    }
    this.form = new FormGroup(formDataObj);
  }
}
