import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferHomeComponent } from './offer-home.component';

describe('OfferHomeComponent', () => {
  let component: OfferHomeComponent;
  let fixture: ComponentFixture<OfferHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
