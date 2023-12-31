import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JestComponent } from './jest.component';

describe('PlaywrightComponent', () => {
  let component: JestComponent;
  let fixture: ComponentFixture<JestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JestComponent],
    });

    fixture = TestBed.createComponent(JestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
