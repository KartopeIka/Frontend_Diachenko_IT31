import { Component, Input } from '@angular/core';
import { News } from '../../news-card-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-card',
  imports: [CommonModule],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css',
})
export class NewsCard {
  @Input() item!:News;
  isRead: boolean = false;
}
