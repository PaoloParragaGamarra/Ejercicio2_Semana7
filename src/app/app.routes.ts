import { Routes } from '@angular/router';
import {OfferHomeComponent} from "./offer/components/offer-home/offer-home.component";

export const routes: Routes = [
  {path : 'home', component: OfferHomeComponent},
  {path : '', redirectTo: 'home', pathMatch: 'full'},
  {path : '**', redirectTo: 'home', pathMatch: 'full'}
];
