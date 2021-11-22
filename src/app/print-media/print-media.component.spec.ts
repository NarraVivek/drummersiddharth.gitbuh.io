import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMediaComponent } from './print-media.component';

describe('PrintMediaComponent', () => {
  let component: PrintMediaComponent;
  let fixture: ComponentFixture<PrintMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
