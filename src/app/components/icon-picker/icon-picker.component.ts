import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";


@Component({
  selector: 'app-icon-picker',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './icon-picker.component.html',
  styleUrl: './icon-picker.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => IconPickerComponent),
      multi: true
    }
    ]
})
export class IconPickerComponent implements ControlValueAccessor {

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
    'king_bed',
    'light',
    'room_preferences',
    'dining',
    'location_off',
    'weekend',
    'flatware',
    'fireplace',
    'smoking_rooms',
    'airline_seat_recline',
    'baby_changing_station',
    'bedroom_parent',
    'scene',
    'airline_seat_recline',
    'bedroom_baby',
    'single_bed',
    'bathroom',
    'vaping_rooms',
    'hot_tub',
    'living',
    'soap',
    'wash',
    'bedroom_child',
    'nest_multi_room',
    'no_meeting_room',
    'dry',
    'concierge',
  ];

  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  writeValue(value: string): void {
    this.selectedIcon = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  selectIcon(iconName: string) {
    this.containerVisible = false;
    this.selectedIcon = iconName;
    this.onChange(iconName);
    this.onTouched();
    this.iconSelected.emit(iconName);
  }

}
