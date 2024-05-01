import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OfferServiceServiceService {
  baseUrl: string = environment.baseUrl; // muetsra todos los libros

  constructor(private Http:HttpClient) { }

  getOffers(){
    return this.Http.get<any>(this.baseUrl);
  }
}
