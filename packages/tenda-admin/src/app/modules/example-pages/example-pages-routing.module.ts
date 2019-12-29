import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageFirstComponent } from './components/page-first/page-first.component';
import { PageSecondComponent } from './components/page-second/page-second.component';

const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: 'first', component: PageFirstComponent },
  { path: 'second', component: PageSecondComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamplePagesRoutingModule {}
