import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { SpecialroomsComponent } from './specialrooms/specialrooms.component';
import { OpeningpageComponent } from './openingpage/openingpage.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BodyComponent } from './body/body.component';
import { CeleprateComponent } from './celeprate/celeprate.component';
import { NgwWowModule } from 'ngx-wow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {NgxTypedJsModule} from 'ngx-typed-js';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    SpecialroomsComponent,
    OpeningpageComponent,
    NotfoundpageComponent,
    NavBarComponent,
    FooterComponent,
    ContactComponent,
    BodyComponent,
    CeleprateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxTypedJsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
