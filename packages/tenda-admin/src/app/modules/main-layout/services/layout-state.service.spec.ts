import { TestBed } from "@angular/core/testing";

import { LayoutStateService } from "./layout-state.service";

describe("LayoutStateService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: LayoutStateService = TestBed.get(LayoutStateService);
    expect(service).toBeTruthy();
  });
});
