import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteconfirmatinComponent } from './deleteconfirmatin/deleteconfirmatin.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DeleteconfirmatinComponent,
    HighlightDirective,
    AnimationDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
