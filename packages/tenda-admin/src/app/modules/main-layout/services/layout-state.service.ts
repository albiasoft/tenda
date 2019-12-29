import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";

export const roundBorders = "5px";
export const squaredBorders = "0";
export const boxShadows = "0 10px 30px 1px rgba(0, 0, 0, 0.06)";
export const boxShadowsNone = "none";

@Injectable({
  providedIn: "root"
})
export class LayoutStateService {
  topMenuState: BehaviorSubject<boolean>;
  sideBarCollapsedState: BehaviorSubject<boolean>;
  sideBarMobileCollapsedState: BehaviorSubject<boolean>;
  borderRadiusState: BehaviorSubject<boolean>;
  blockShadowState: BehaviorSubject<boolean>;

  constructor() {
    this.topMenuState = new BehaviorSubject<boolean>(false);
    this.sideBarCollapsedState = new BehaviorSubject<boolean>(false);
    this.sideBarMobileCollapsedState = new BehaviorSubject<boolean>(true);
    this.borderRadiusState = new BehaviorSubject<boolean>(false);
    this.blockShadowState = new BehaviorSubject<boolean>(false);

    document.documentElement.style.setProperty("--borderRadius", roundBorders);
    document.documentElement.style.setProperty("--boxShadows", boxShadowsNone);
  }

  getTopMenuState(): Observable<boolean> {
    return this.topMenuState.asObservable();
  }
  setTopMenuState(state): void {
    this.topMenuState.next(state);
  }

  getSideBarCollapsedState(): Observable<boolean> {
    return this.sideBarCollapsedState.asObservable();
  }

  setSideBarCollapsedState(state): void {
    this.sideBarCollapsedState.next(state);
  }

  getSideBarMobileCollapsedState(): Observable<boolean> {
    return this.sideBarMobileCollapsedState.asObservable();
  }

  setSideBarMobileCollapsedState(state): void {
    this.sideBarMobileCollapsedState.next(state);
  }

  getBorderRadiusState(): Observable<boolean> {
    return this.borderRadiusState.asObservable();
  }

  setBorderRadiusState(state): void {
    if (state) {
      document.documentElement.style.setProperty(
        "--borderRadius",
        squaredBorders
      );
    } else {
      document.documentElement.style.setProperty(
        "--borderRadius",
        roundBorders
      );
    }
    this.borderRadiusState.next(state);
  }

  getBlockShadowState(): Observable<boolean> {
    return this.blockShadowState.asObservable();
  }

  setBlockShadowState(state): void {
    if (state) {
      document.documentElement.style.setProperty("--boxShadows", boxShadows);
    } else {
      document.documentElement.style.setProperty(
        "--boxShadows",
        boxShadowsNone
      );
    }
    this.blockShadowState.next(state);
  }

  toggleSidebar() {
    this.sideBarCollapsedState.next(!this.sideBarCollapsedState.value);
  }

  toggleMobileSidebar() {
    this.sideBarMobileCollapsedState.next(
      !this.sideBarMobileCollapsedState.value
    );
  }
}
