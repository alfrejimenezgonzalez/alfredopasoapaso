import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BecariosPage } from './becarios.page';

describe('BecariosPage', () => {
  let component: BecariosPage;
  let fixture: ComponentFixture<BecariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BecariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
