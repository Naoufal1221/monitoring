import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateApplicationComponent } from './create-application/create-application.component';
import { ListApplicationComponent } from './list-application/list-application.component';
import { DetailApplicationComponent } from './detail-application/detail-application.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateApplicationComponent,
    ListApplicationComponent,
    DetailApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
