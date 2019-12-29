import { Component, OnInit } from "@angular/core";
import { LayoutStateService } from "../../services/layout-state.service";
import { ThemeService } from "../../../../services/theme.service";
import { Observable } from "rxjs";
import { environment } from "../../../../../environments/environment";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"]
})
export class TopbarComponent implements OnInit {
  icon = `${environment.deployAssetsPath}/assets/images/burger.svg`;
  searchOpened = false;
  isLightTheme: Observable<boolean>;
  isTopMenuActive: Observable<boolean>;

  emails = [
    {
      ava: `${environment.deployAssetsPath}/assets/images/topbar/ava.png`,
      name: "Cristopher Changer",
      message: "Good but communication was good e..",
      date: "09:02"
    },
    {
      ava: `${environment.deployAssetsPath}/assets/images/topbar/ava2.png`,
      name: "Sveta Narry",
      message: "It is a long established fact that a read..",
      date: "09:00"
    },
    {
      ava: `${environment.deployAssetsPath}/assets/images/topbar/ava3.png`,
      name: "Lory McQueen",
      message: "There are many variations of passages..",
      date: "08:43"
    },
    {
      ava: `${environment.deployAssetsPath}/assets/images/topbar/ava2.png`,
      name: "Cristopher Changer",
      message: "Yas sent you an invitation to join proje..",
      date: "08:43"
    }
  ];
  notifications = [
    {
      ava: `${environment.deployAssetsPath}/assets/images/topbar/ava.png`,
      name: "Cristopher Changer",
      message: " has started a new project",
      date: "09:02"
    },
    {
      ava: `${environment.deployAssetsPath}/assets/images/topbar/ava2.png`,
      name: "Sveta Narry",
      message: " has closed a project",
      date: "09:00"
    },
    {
      ava: `${environment.deployAssetsPath}/assets/images/topbar/ava3.png`,
      name: "Lory McQueen",
      message: " has started a new project as a Project Managert",
      date: "08:43"
    },
    {
      ava: `${environment.deployAssetsPath}/assets/images/topbar/ava2.png`,
      name: "Cristopher Changer",
      message: " has closed a project",
      date: "08:43"
    }
  ];

  constructor(
    private layoutState: LayoutStateService,
    private themeService: ThemeService
  ) {
    this.isLightTheme = themeService.getThemeState();
    this.isTopMenuActive = layoutState.getTopMenuState();
  }

  ngOnInit() {}

  changeSidebarVisibility() {
    this.layoutState.toggleSidebar();
  }

  changeMobileSidebarVisibility() {
    this.layoutState.toggleMobileSidebar();
  }

  openSearch() {
    this.searchOpened = !this.searchOpened;
  }
}
