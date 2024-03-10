import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ItemService } from "../../service/item/item.service";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { Subscription } from "rxjs";
import { Item } from "../../service/item/item.model";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: 'app-subpage-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './subpage-table.component.html',
  styleUrl: './subpage-table.component.css'
})
export class SubpageTableComponent implements OnInit, OnDestroy, OnChanges {

  @Input() roomName: string | null = null;
  displayedColumns: string[] = ["Nazwa", "Ilość", "Cena"];
  dataSource: Item[] = [];
  itemsSubscription: Subscription | undefined;
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

  onRightClick($event: MouseEvent, row: any) {
    $event.preventDefault()
    this.trigger.openMenu();
    console.log("row", row)
  }
}
