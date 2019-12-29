import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TopbarCollapsedComponent } from "./topbar-collapsed.component";

describe("TopbarCollapsedComponent", () => {
  let component: TopbarCollapsedComponent;
  let fixture: ComponentFixture<TopbarCollapsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopbarCollapsedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarCollapsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
