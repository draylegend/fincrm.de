import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Offer } from '@draylegend/offer/domain';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-offer',
  standalone: true,
  styleUrl: './offer.component.scss',
  templateUrl: './offer.component.html',
})
export class OfferComponent {
  @Input({ required: true })
  data!: Offer;
}
