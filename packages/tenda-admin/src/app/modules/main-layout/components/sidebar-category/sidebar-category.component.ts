import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar-category",
  templateUrl: "./sidebar-category.component.html",
  styleUrls: ["./sidebar-category.component.scss"]
})
export class SidebarCategoryComponent implements OnInit {
  @Input() icon = "";
  @Input() isNew = false;
  @Input() title = "";
  iconName;
  isCollapsed = true;

  constructor() {}

  ngOnInit() {
    this.iconName = "lnr-" + this.icon;
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
