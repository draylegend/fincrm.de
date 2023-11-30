import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaywrightComponent } from './playwright.component';

describe('PlaywrightComponent', () => {
  let component: PlaywrightComponent;
  let fixture: ComponentFixture<PlaywrightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PlaywrightComponent],
    });

    fixture = TestBed.createComponent(PlaywrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
