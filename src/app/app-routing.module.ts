import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{path:'',component: MainComponent,children: [{path:'login',component: LoginComponent},{path:'logout',component: LoginComponent}]},{path:'login',component: LoginComponent},{path:'logout',component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
