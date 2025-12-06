import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Footer } from './footer/footer';
import { NewsCard } from '../news-card/news-card';

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, NewsCard],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class LayoutComponent {}