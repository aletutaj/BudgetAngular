import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from "../../service/item/item.service";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-subpage-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './subpage-table.component.html',
  styleUrl: './subpage-table.component.css'
})
export class SubpageTableComponent implements OnInit {

  @Input() room: string | null = null;
  displayedColumns: string[] = ["Nazwa", "Ilość", "Cena"];
  dataSource: any[] = [];

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    if (this.room !== null) {
      this.itemService.getItemsForRoom(this.room).subscribe((items) => {
        this.dataSource = items;
      });

    }
  }
}
