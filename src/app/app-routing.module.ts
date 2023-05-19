import { CeleprateComponent } from './celeprate/celeprate.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OpeningpageComponent } from './openingpage/openingpage.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { SpecialroomsComponent } from './specialrooms/specialrooms.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'opening'},
  {path:"opening",component:OpeningpageComponent},
  {path:"Home",component:HomeComponent,title:"Kookari-Hotel",children:[
   {path:"nav",component:NavBarComponent} ,
  {path:"About",component:AboutComponent},
  {path:"Kokkari",component:BodyComponent},
  {path:'hello',component:CeleprateComponent},
  {path:"Services",component:ServicesComponent},
  {path:"SpecialRooms",component:SpecialroomsComponent},
  {path:"contactUs",component:ContactComponent},
  {path:"footer",component:FooterComponent},
  ]},
  {path:'**',component:NotfoundpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
