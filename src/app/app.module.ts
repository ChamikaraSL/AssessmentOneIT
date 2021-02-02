import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MathChallengeComponent } from './math-challenge/math-challenge.component';
import { FrontEndOneComponent } from './front-end-one/front-end-one.component';
import { FrontEndTwoComponent } from './front-end-two/front-end-two.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MathChallengeComponent,
    FrontEndOneComponent,
    FrontEndTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
