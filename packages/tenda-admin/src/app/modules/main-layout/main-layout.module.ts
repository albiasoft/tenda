import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { DEFAULT_PERFECT_SCROLLBAR_CONFIG } from './assets/PerfectScrollbarConfig';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarLinkComponent } from './components/sidebar-link/sidebar-link.component';
import { RouterModule } from '@angular/router';
import { SidebarCategoryComponent } from './components/sidebar-category/sidebar-category.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MatIconModule } from '@angular/material/icon';
import { TopbarCollapsedComponent } from './components/topbar-collapsed/topbar-collapsed.component';
import { ProfileWidgetComponent } from './components/profile-widget/profile-widget.component';
import { SidebarButtonComponent } from './components/sidebar-button/sidebar-button.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { DropdownContainerComponent } from './assets/dropdown-container/dropdown-container.component';
import { NotifierModule } from 'angular-notifier';
import { greetingNotificationConfig } from './assets/greeting.notification.config';
import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    MainLayoutComponent,
    SidebarComponent,
    SidebarLinkComponent,
    SidebarCategoryComponent,
    TopbarComponent,
    TopbarCollapsedComponent,
    ProfileWidgetComponent,
    SidebarButtonComponent,
    DropdownContainerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PerfectScrollbarModule,
    RouterModule,
    MainLayoutRoutingModule,
    CollapseModule.forRoot(),
    MatIconModule,
    NotifierModule.withConfig(greetingNotificationConfig),
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class MainLayoutModule {}
