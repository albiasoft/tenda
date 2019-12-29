import { Component, Input, OnInit } from "@angular/core";
import { ThemeService } from "../../../../services/theme.service";
import { LayoutStateService } from "../../services/layout-state.service";
import { Observable } from "rxjs/internal/Observable";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  @Input() isMobile = false;
  isCollapsed$: Observable<boolean>;
  isMobileCollapsed$: Observable<boolean>;
  isTopMenuActive$: Observable<boolean>;

  constructor(
    private themeService: ThemeService,
    private layoutState: LayoutStateService,
    private router: Router
  ) {
    this.isTopMenuActive$ = layoutState.getTopMenuState();
    this.isMobileCollapsed$ = layoutState.getSideBarMobileCollapsedState();
    this.isCollapsed$ = layoutState.getSideBarCollapsedState();
    router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(val => {
        if (this.isMobile) {
          this.layoutState.toggleMobileSidebar();
        }
      });
  }

  ngOnInit() {}

  changeToLight() {
    this.themeService.toggleLight();
  }

  changeToDark() {
    this.themeService.toggleDark();
  }
}
