import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TemplateUserFormComponent } from './components/template-user-form/template-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveUserFormComponent } from './components/reactive-user-form/reactive-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TemplateUserFormComponent,
    ReactiveUserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
