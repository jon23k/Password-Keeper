import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import { MainComponent } from "app/main/main.component";

const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'signin', component: SigninComponent},
    {path: '**', component: SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
