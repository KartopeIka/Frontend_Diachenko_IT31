import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { News } from '../../news-card-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-details',
  imports: [CommonModule],
  templateUrl: './news-details.html',
  styleUrl: './news-details.css',
})
export class NewsDetails implements OnInit {
  item: News | undefined;

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.item = this.data.getItemById(id);
  }
}
