import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-filter-bar',
  imports: [FormsModule],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.css',
})
export class FilterBar {

  constructor(private dataService: DataService) {}
  selectedFilterRadioButton: string = 'all';

  onSelectedFilterRadioButtonChanged() {
    this.dataService.updatePopularity(this.selectedFilterRadioButton);
  }

}
