import { Component, HostListener, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-dropdown-container",
  templateUrl: "./dropdown-container.component.html",
  styleUrls: ["./dropdown-container.component.scss"]
})
export class DropdownContainerComponent implements OnInit {
  @Input() title = "";
  isCollapsed = true;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
