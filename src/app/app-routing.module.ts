import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BudgetSummaryComponent } from "./components/budget-summary/budget-summary.component";
import { AddItemComponent } from "./components/add-item/add-item.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { RoomComponent } from "./components/room/room.component";
import { SubpageTableComponent } from "./widgets/subpage-table/subpage-table.component";



const routes: Routes = [
  { path: 'summary', component: BudgetSummaryComponent },
  { path: 'add-item', component: AddItemComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'room/:room', component: RoomComponent },
  { path: 'subpage-table', component: SubpageTableComponent },
  { path: '', redirectTo: '/summary', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
