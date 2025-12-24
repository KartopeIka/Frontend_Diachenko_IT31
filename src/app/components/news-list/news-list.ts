import { Component, Input} from '@angular/core';
import { NewsCard } from '../news-card/news-card';
import { CommonModule } from '@angular/common';
import { News } from '../../news-card-interface';
import { FilterBar } from '../filter-bar/filter-bar';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-news-list',
  imports: [NewsCard, CommonModule, FilterBar],
  templateUrl: './news-list.html',
  styleUrl: './news-list.css',
})
export class NewsList{

  openedCardId : number | null = null;

  getNewOpenedCardId(id : number | null) : void {
    this.openedCardId = id;
  }
  
  items: News[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.items = this.dataService.getItems();}

  @Input() searchText: string = '';

  selectedFilterRadioButton: string = 'all';

  getSelectedFilterRadioButton(value: string) {
    this.selectedFilterRadioButton = value;
  }

  get filteredAndSearchedNews() {
    return this.items
      .filter(NewsCard => {
        // Фільтрація по радіокнопках
        if (this.selectedFilterRadioButton === 'popular') {
          return NewsCard.viewsAmmount>=500;
        } else if (this.selectedFilterRadioButton === 'unpopular') {
          return NewsCard.viewsAmmount<500;
        }
        return true; // Повернути всі новини, якщо вибрано "all"
      })
      .filter(NewsCard => {
        // Пошук по заголовку
        return NewsCard.title.toLowerCase().includes(this.searchText.toLowerCase());
      });
  }
}