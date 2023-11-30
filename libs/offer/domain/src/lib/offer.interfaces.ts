export interface Offer {
  angebotsId: string;
  anbieter: string;
  zinssatz: number;
  effektivZins: number;
  laufzeit: number;
  darlehensbetrag: number;
  monatlicheRate: number;
  gesamtkosten: number;
  sonderzahlungOption: boolean;
}
