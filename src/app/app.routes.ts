import { Routes } from '@angular/router';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {AboutComponent} from "../about/about.component";
import {ContactComponent} from "../contact/contact.component";

export const routes: Routes = [
  {path:'Dashboard',component: DashboardComponent},
  {path:'About',component: AboutComponent},
  {path:'Contact',component: ContactComponent},
];
