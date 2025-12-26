import { Component} from '@angular/core';
import { NewsCard } from '../news-card/news-card';
import { CommonModule } from '@angular/common';
import { News } from '../../news-card-interface';
import { FilterBar } from '../filter-bar/filter-bar';
import { DataService } from '../../services/data.service';
import { SearchBar } from '../search-bar/search-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-list',
  imports: [NewsCard, CommonModule, SearchBar, FilterBar],
  templateUrl: './news-list.html',
  styleUrl: './news-list.css',
})
export class NewsList{
  items$!: Observable<News[]>;

  constructor(private dataServise: DataService) {
    this.items$ = this.dataServise.items$;
  }
}