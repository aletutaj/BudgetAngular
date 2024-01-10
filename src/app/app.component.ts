import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    NavigationComponent,
    BrowserAnimationsModule,
  ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BudgetAngular';
}
