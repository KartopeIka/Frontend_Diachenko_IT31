import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Footer } from './footer/footer';
import { NewsList } from '../news-list/news-list';

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, NewsList],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class LayoutComponent {}