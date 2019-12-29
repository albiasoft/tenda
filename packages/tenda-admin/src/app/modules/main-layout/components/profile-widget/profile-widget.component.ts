import { Component, OnInit } from "@angular/core";
import { environment } from "../../../../../environments/environment";

@Component({
  selector: "app-profile-widget",
  templateUrl: "./profile-widget.component.html",
  styleUrls: ["./profile-widget.component.scss"]
})
export class ProfileWidgetComponent implements OnInit {
  ava = `${environment.deployAssetsPath}/assets/images/ava.png`;
  isCollapsed = true;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
