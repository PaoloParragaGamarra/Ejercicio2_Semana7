import { Component } from '@angular/core';
import {MatTable, MatTableDataSource, MatTableModule} from "@angular/material/table";
import { Offer} from "../../model/offer.model";

@Component({
  selector: 'app-offer-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './offer-table.component.html',
  styleUrl: './offer-table.component.css'
})
export class OfferTableComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource();
}
