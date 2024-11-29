import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteritemsComponent } from './footeritems.component';

describe('FooteritemsComponent', () => {
  let component: FooteritemsComponent;
  let fixture: ComponentFixture<FooteritemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooteritemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooteritemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
