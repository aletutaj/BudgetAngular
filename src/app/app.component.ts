import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SubpageTableComponent } from "./widgets/subpage-table/subpage-table.component";
import { AddNewRoomComponent } from "./components/add-new-room/add-new-room.component";
import { BudgetSummaryComponent } from "./components/budget-summary/budget-summary.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    NavigationComponent,
    BrowserAnimationsModule,
    SubpageTableComponent,
    AddNewRoomComponent,
    BudgetSummaryComponent,
    FormsModule
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BudgetAngular';
}
