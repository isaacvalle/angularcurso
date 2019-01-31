import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//importación de componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './components/default/default.component';

const appRoutes:Routes = [
  {path: '', component: DefaultComponent},
  {path: 'inicio', component: DefaultComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: DefaultComponent},
  {path: 'logout/:sure', component: LoginComponent}
];

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
