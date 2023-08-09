import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEquiposComponent } from './components/listar-equipos/listar-equipos.component';
import { LoginComponent } from './components/login/login.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListarEquiposComponent,
    LoginComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    DatePipe,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
