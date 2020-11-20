import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countries-table',
  templateUrl: './countries-table.component.html',
  styleUrls: ['./countries-table.component.css']
})
export class CountriesTableComponent implements OnInit {

  sortField: string = null;
  sortDirection: string = null;

  ngOnInit(): void {
  }

  @Input() countries: object;

  @Output()
  sort: EventEmitter<string> = new EventEmitter<string>();

  switchDirection = (field) => {
    if (!this.sortField || (this.sortField===field && this.sortDirection ==='asc')) {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.sortField=field;
    this.sort.emit(this.sortField+"-"+this.sortDirection)
    return
  };


}
