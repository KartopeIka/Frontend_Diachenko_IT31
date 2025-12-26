import { Routes } from '@angular/router';
import { NewsList } from './components/news-list/news-list';
import { NewsDetails } from './components/news-details/news-details';

export const routes: Routes = [
    {path: '', redirectTo: 'items', pathMatch: 'full'},
    {path: 'items', component: NewsList},
    {path: 'items/:id', component: NewsDetails}
];
