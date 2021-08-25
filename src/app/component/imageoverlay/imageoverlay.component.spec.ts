import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageoverlayComponent } from './imageoverlay.component';

describe('ImageoverlayComponent', () => {
  let component: ImageoverlayComponent;
  let fixture: ComponentFixture<ImageoverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageoverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageoverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
