import { DclComponent } from './dcl.component';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

describe('DclComponent', () => {
  let component: DclComponent;
  let fixture: ComponentFixture<DclComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DclComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
