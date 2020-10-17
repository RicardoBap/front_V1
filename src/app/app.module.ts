import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { PerguntasModule } from './perguntas/perguntas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    CoreModule,

    AppRoutingModule,
    PerguntasModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
