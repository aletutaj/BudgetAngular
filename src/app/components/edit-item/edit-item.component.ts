import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from "../../service/item/item.model";
import { NavigationStart, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-edit-item',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.css'
})
export class EditItemComponent {
  item: Item | null = null;
  roomName: string | null = null;
  @Input() state: string | null = null;

  @Output() save: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(private router: Router) {
    // @ts-ignore
    const state = router.getCurrentNavigation()?.extras.state;
    console.log("state", state)
// @ts-ignore
    this.item = state.selectedItem;
    // @ts-ignore
    this.roomName = state.roomName;

  }

  ngOnChanges() {
    if (this.item) {
      this.item = {...this.item};
    }
    // console.log('state', this.state)
  }

  saveChanges(): void {
    if (this.item) {
      const items: Item[] = JSON.parse(localStorage.getItem("items") || '[]');
      const index = items.findIndex(item => item.id === this.item?.id);
      if (index !== -1) {
        const updatedItem: Item = {
          name: this.item.name,
          quantity: this.item.quantity,
          price: this.item.price,
          roomName: this.roomName,
          id: this.item.id
        };

        items[index] = updatedItem;
        localStorage.setItem("items", JSON.stringify(items));

        this.save.emit(updatedItem);

        if (this.roomName) {
          this.router.navigate(['/room', this.roomName!]);
        }
      }
    }
  }

}
