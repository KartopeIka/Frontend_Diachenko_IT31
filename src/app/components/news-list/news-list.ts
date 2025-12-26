import { Component, Input} from '@angular/core';
import { NewsCard } from '../news-card/news-card';
import { CommonModule } from '@angular/common';
import { News } from '../../news-card-interface';
import { FilterBar } from '../filter-bar/filter-bar';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

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
  private itemsSub?: Subscription;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.itemsSub = this.dataService.getItemsStream().subscribe((items) => {
      this.items = items;
    });
  }

  ngOnDestroy(): void {
    if (this.itemsSub) {
      this.itemsSub.unsubscribe();
    }
  }

}