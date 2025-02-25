import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardPSComponent } from './card-ps.component';
import { ProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { routes } from '../../../app.routes';
import { provideCore } from '@core/core';

describe(CardPSComponent.name, () => {
  const mockPSData: ProntoSoccorso = {
    tipo: 'OK',
    dataAggiornamento: '16/07/2024 ore 17:15',
    codPsOd: '005-PS-PS',
    codOspOd: 'Presidio Ospedaliero di Cles',
    ps: 'Ospedale di Cles - Pronto Soccorso',
    unitaOperativa: 'Servizio di Pronto Soccorso',
    localita: 'CLES',
    attesa: {
      bianco: 0,
      verde: 3,
      giallo: 0,
      rosso: 0,
      azzurro: 2,
      arancio: 1,
    },
    ambulatorio: {
      bianco: 0,
      verde: 6,
      giallo: 0,
      rosso: 0,
      azzurro: 5,
      arancio: 4,
    },
    osservazione: {
      bianco: 0,
      verde: 0,
      giallo: 0,
      rosso: 0,
      azzurro: 1,
      arancio: 0,
    },
    attesaMedia: {
      bianco: 240,
      verde: 120,
      giallo: 10,
      rosso: 0,
      azzurro: 60,
      arancio: 15,
    },
    direttore: 'Direttore: dott.ssa Cristina Contu',
    messaggio: "IN CASO DI NECESSITA' RIVOLGERSI ALL'INFERMIERE DI TRIAGE / IF NECESSARY CONTACT THE TRIAGE NURSE",
    dettagli: {
      id: '010-PS-PS',
      contatti: {
        telefono: ['+39 0464 582622'],
        email: ['cristina.carnesecchi@apss.tn.it'],
        pec: 'distretto.centrosud@pec.apss.tn.it',
      },
      sede: {
        indirizzo: 'Viale dei Capitelli, 48 - 38062 Arco',
      },
      link: 'https://www.apss.tn.it/Azienda/Unita-operative-e-strutture-organizzative/Struttura-semplice-pronto-soccorso-Arco',
    },
  };
  let component: CardPSComponent;
  let fixture: ComponentFixture<CardPSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideCore({ routes })],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(CardPSComponent);
    component = fixture.componentInstance;
    component.prontoSoccorso.set(mockPSData);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
