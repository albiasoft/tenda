import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplePagesRoutingModule } from './example-pages-routing.module';
import { PageFirstComponent } from './components/page-first/page-first.component';
import { PageSecondComponent } from './components/page-second/page-second.component';

@NgModule({
  declarations: [PageFirstComponent, PageSecondComponent],
  imports: [CommonModule, ExamplePagesRoutingModule],
})
export class ExamplePagesModule {}
