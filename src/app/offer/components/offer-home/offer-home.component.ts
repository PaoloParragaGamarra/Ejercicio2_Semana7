import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {Offer} from "../../model/offer.model";
import {Router} from "@angular/router";
import {OfferServiceServiceService} from "../../services/offer-service.service.service";
import {MatCardModule} from "@angular/material/card";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-offer-home',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard,
    MatCardHeader,
    MatCardModule,
    NgForOf
  ],
  templateUrl: './offer-home.component.html',
  styleUrl: './offer-home.component.css'
})
export class OfferHomeComponent implements OnInit{
  offerData: Offer;
  offers: Offer[] = [];

  constructor(private offerService: OfferServiceServiceService, private router: Router ){
    this.offerData = {} as Offer;
  }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers() {
    this.offerService.getOffers().subscribe(
      (data: any[]) => {
        if (data && data.length > 0) {
          this.offers = data.map((offer: any) => {
            return new Offer(
              offer.id,
              offer.title,
              offer.description,
              offer.points,
              offer.businessId,
              offer.actions
            );
          });
          console.log(this.offers); // Agregar esta línea para imprimir las ofertas en la consola
        } else {
          console.error('No offers data found in the response.');
        }
      },
      (error: any) => {
        console.error('Error retrieving offers:', error);
        // Manejar el error apropiadamente
      }
    );
  }

  countOffers() {
    return this.offers.length;
  }
}
