import { Component, HostListener, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-topbar-collapsed",
  templateUrl: "./topbar-collapsed.component.html",
  styleUrls: ["./topbar-collapsed.component.scss"]
})
export class TopbarCollapsedComponent implements OnInit {
  @Input() isNew = false;
  isCollapsed = true;

  @HostListener("click", ["$event.target"])
  onClick(target) {
    if (target.classList.contains("collapse-button")) {
      this.toggle();
    }
  }

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
