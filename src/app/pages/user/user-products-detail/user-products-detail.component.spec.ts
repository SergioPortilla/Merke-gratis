import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductsDetailComponent } from './user-products-detail.component';

describe('ModalProductsComponent', () => {
  let component: UserProductsDetailComponent;
  let fixture: ComponentFixture<UserProductsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserProductsDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProductsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
