import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { News } from '../../news-card-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-card',
  imports: [CommonModule],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css',
})
export class NewsCard implements OnChanges{
  @Input() item!:News;
  isRead: boolean = false;

  @Input() openedCardId!: number | null;
  @Output() id = new EventEmitter<number | null>();

  isNewsOpen: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['openedCardId']) {
      this.isOpen();
    }
  }

  isOpen() : void {
    this.isNewsOpen = this.openedCardId === this.item.id;
  }

  onNewsOpen() : void {
    this.id.emit(this.item.id);
    this.isNewsOpen = true;
  }

  onNewsClose() : void {
    this.id.emit(null);
    this.isNewsOpen = false;
  }
}
