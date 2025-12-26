import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { News } from '../../news-card-interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { HoverHighlightDirective } from '../../directives/on-hover.directive';

@Component({
  selector: 'app-news-card',
  imports: [CommonModule, RouterModule,TruncatePipe,HoverHighlightDirective],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css',
})
export class NewsCard{
  @Input() item!:News;
  isRead: boolean = false;

  @Input() openedCardId!: number | null;
  @Output() id = new EventEmitter<number | null>();

  isNewsOpen: boolean = false;

  onNewsOpen() : void {
    this.id.emit(this.item.id);
    this.isNewsOpen = true;
  }

  onNewsClose() : void {
    this.id.emit(null);
    this.isNewsOpen = false;
  }
}
