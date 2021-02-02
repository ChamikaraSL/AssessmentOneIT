import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathChallengeComponent } from './math-challenge/math-challenge.component';
import { FrontEndOneComponent } from './front-end-one/front-end-one.component';
import { FrontEndTwoComponent } from './front-end-two/front-end-two.component';
const routes: Routes = [
  { path: 'ex1', component: FrontEndOneComponent },
  { path: 'ex2', component: FrontEndTwoComponent },
  { path: 'ex3', component: MathChallengeComponent },
  { path: '**', component: FrontEndOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
