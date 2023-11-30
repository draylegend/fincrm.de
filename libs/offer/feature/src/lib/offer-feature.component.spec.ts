import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfferFeatureComponent } from './offer-feature.component';

describe('FeatureComponent', () => {
  let component: OfferFeatureComponent;
  let fixture: ComponentFixture<OfferFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OfferFeatureComponent],
    });

    fixture = TestBed.createComponent(OfferFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
