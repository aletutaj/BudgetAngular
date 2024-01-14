import { Routes } from '@angular/router';
import { RoomComponent } from "./components/room/room.component";
import { AddItemComponent } from "./components/add-item/add-item.component";
import { BudgetSummaryComponent } from "./components/budget-summary/budget-summary.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { AddNewRoomComponent } from "./components/add-new-room/add-new-room.component";

export const routes: Routes = [

  {path: 'summary', component: BudgetSummaryComponent},
  {path: 'add-item', component: AddItemComponent},
  {path: 'dropdown', component: DropdownComponent},
  {path: 'room/add-new', component: AddNewRoomComponent},
  {path: 'room/:roomId', component: RoomComponent},
  {path: '', redirectTo: '/summary', pathMatch: 'full'},
];
