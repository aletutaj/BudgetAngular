import { Routes } from '@angular/router';
import { RoomComponent } from "./components/room/room.component";
import { AddItemComponent } from "./components/add-item/add-item.component";

export const routes: Routes = [
  { path: 'room/:id', component: RoomComponent },
  { path: 'add-item', component: AddItemComponent }
];
