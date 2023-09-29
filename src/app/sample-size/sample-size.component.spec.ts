import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleSizeComponent } from './sample-size.component';

describe('SampleSizeComponent', () => {
  let component: SampleSizeComponent;
  let fixture: ComponentFixture<SampleSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleSizeComponent]
    });
    fixture = TestBed.createComponent(SampleSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
