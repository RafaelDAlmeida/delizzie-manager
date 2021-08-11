import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosVerComponent } from './produtos-ver.component';

describe('ProdutosVerComponent', () => {
  let component: ProdutosVerComponent;
  let fixture: ComponentFixture<ProdutosVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
