

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEquiposComponent } from './components/listar-equipos/listar-equipos.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'listarEquipos', component: ListarEquiposComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
