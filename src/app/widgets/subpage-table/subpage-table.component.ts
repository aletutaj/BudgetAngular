import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ItemService } from "../../service/item/item.service";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { Subscription } from "rxjs";
import { Item } from "../../service/item/item.model";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";
import { CommonModule } from "@angular/common";
import { EditItemComponent } from "../../components/edit-item/edit-item.component";
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-subpage-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    EditItemComponent,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './subpage-table.component.html',
  styleUrl: './subpage-table.component.css'
})
export class SubpageTableComponent implements OnInit, OnDestroy, OnChanges {

  @Input() roomName: string | null = null;
  displayedColumns: string[] = ["Nazwa", "Ilość", "Cena"];
  dataSource: Item[] = [];
  itemsSubscription: Subscription | undefined;
  selectedItem: Item | null = null;
  // @ts-ignore
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private itemService: ItemService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("moje zmiany,", changes)
    if (changes["roomName"].currentValue && this.roomName !== null) {
      this.itemsSubscription = this.itemService.getItemsForRoom(this.roomName).subscribe((items) => {
        this.dataSource = items.filter((item) => item.roomName === this.roomName);
      });
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.itemsSubscription) {
      this.itemsSubscription.unsubscribe();
    }
  }

  onRightClick($event: MouseEvent, item: Item) {
    $event.preventDefault()
    this.selectedItem = item;
    this.trigger.openMenu();
    console.log("row", item)
  }

  deleteItem(): void {
    const selectedItem = this.selectedItem ?? null;
    if (selectedItem !== null) {
      let items: Item[] = JSON.parse(localStorage.getItem("items") || '[]');
      items = items.filter(i => i.name !== selectedItem.name);
      localStorage.setItem("items", JSON.stringify(items));
      console.log("usunieto item ", selectedItem);
      this.itemService.loadItemsFromLocalStorage();
      this.dataSource = items;
    }
  }

  editItem(): void {
    const selectedItem = this.selectedItem ?? null;

  }
  saveChanges(updatedItem: Item): void {}
}
