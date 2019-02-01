import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//importación de componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { CarNewComponent } from './components/car-new/car-new.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

const appRoutes:Routes = [
  {path: '', component: DefaultComponent},
  {path: 'inicio', component: DefaultComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout/:sure', component: LoginComponent},
  {path: 'crear-coche', component: CarNewComponent},
  {path: 'editar-coche/:id', component: CarEditComponent},
  {path: 'coche/:id', component: CarDetailComponent},
  {path: '**', component: DefaultComponent}
];

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
