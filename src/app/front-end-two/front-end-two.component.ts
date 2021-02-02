import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-front-end-two',
  template:
    `<div>
   <form name="nameForm" novalidate (ngSubmit)="generate()" [formGroup]="nameForm">
         <input type="text" name="firstname" formControlName="firstname" required />
         <input type="text" name="lastname" formControlName="lastname" required />

         <button type="submit" [disabled]="nameForm.invalid">generate</button>
       </form>

       <span id="output">generated username : {{generatedUserName}}</span>
   </div>`,
  styles: []
})

export class FrontEndTwoComponent implements OnInit {
  generatedUserName: string = "Empty";
  nameForm = this.fb.group({
    firstname: "Coder",
    lastname: "Byte"
  });

  constructor(
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  generate() {
    let firstname: string = this.nameForm.get('firstname').value;
    let lastname: string = this.nameForm.get('lastname').value;
    this.generatedUserName = `${firstname}_${lastname}_${Math.floor(Math.random() * 9) + 1}`;
  }
}