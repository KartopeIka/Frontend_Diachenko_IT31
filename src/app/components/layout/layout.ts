import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Footer } from './footer/footer';
import { NewsList } from '../news-list/news-list';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  selector: 'app-layout',
  imports: [Header, Footer, NewsList,SearchBar],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})

export class LayoutComponent {
  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }
}