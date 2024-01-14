import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";


@Component({
  selector: 'app-icon-picker',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './icon-picker.component.html',
  styleUrl: './icon-picker.component.css'
})
export class IconPickerComponent {
  @Output() iconSelected = new EventEmitter<string>();
  selectedIcon: string = "";
  containerVisible = false;

  availableIcons = [
    'location_on',
    'bed',
    'bathtub',
    'meeting_room',
    'chair',
    'wc',
    'family_restroom',
    'checkroom',
    'shower',
    'room_service',
    'bathtub',
    'king bed',
    'light',
    'room_preferences',
    'dining',
    'location_off',
    'weekend',
    'flatware',
    'fireplace',
    'smoking_rooms',
    'airline seat recline',
    'baby changing station',
    'bedroom parent',
    'scene',
    'airline seat recline',
    'bedroom baby',
    'single bed',
    'bathroom',
    'vaping rooms',
    'hot tub',
    'living',
    'soap',
    'wash',
    'bedroom child',
    'nest multi room',
    'no meeting room',
    'dry',
    'airline seat legroom',
    'airline seat legroom',
    'airline seat legroom',
    'flights and hotels',
    'concierge',
  ];

  selectIcon(iconName: string) {
    this.containerVisible = false;
    this.selectedIcon = iconName;
    this.iconSelected.emit(iconName);
  }

}

//validacja czy nie jest pusty,
//ngModul dla iconPickera
// dodac ControlValueAccessor
