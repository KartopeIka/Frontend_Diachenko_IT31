import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  searchText: string = '';

  constructor(private dataService: DataService) {}
  onSearchTextChanged() {
    this.dataService.updateSearch(this.searchText);
  }
}