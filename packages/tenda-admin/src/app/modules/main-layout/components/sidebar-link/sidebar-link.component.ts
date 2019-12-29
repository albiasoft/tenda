import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "app-sidebar-link",
  templateUrl: "./sidebar-link.component.html",
  styleUrls: ["./sidebar-link.component.scss"]
})
export class SidebarLinkComponent implements OnInit {
  @Input() route = "";
  @Input() icon = "";
  @Input() newLink = false;
  @Input() title = "";
  @Output() hideSidebarHandler = new EventEmitter<boolean>();
  iconName;

  constructor() {}

  ngOnInit() {
    this.iconName = "lnr-" + this.icon;
  }

  hideSidebar() {
    this.hideSidebarHandler.emit(true);
  }
}
