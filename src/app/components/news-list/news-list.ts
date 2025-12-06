import { Component } from '@angular/core';
import { NewsCard } from '../news-card/news-card';

@Component({
  selector: 'app-news-list',
  imports: [],
  templateUrl: './news-list.html',
  styleUrl: './news-list.css',
})
export class NewsList {
  items: NewsCard[]=[
    {
      title: 'Twighlight Sparkle recommends learning JS!',
      imgUrl: '',
      date: '06.12.2005 22:55',
      viewsAmmount: 376,
      description: 'Princess of Equestria shares her opinion on JavaScript usability.',
      author: 'Julia Diachenko',
      keyWords: ['JavaScript','Programming','Learning','Interview'],
      mainText: ''
    },
    {
      title: 'Princess Celestia worried abot AI taking her place!',
      imgUrl: '',
      date: '06.12.2025 23:44',
      viewsAmmount: 1023,
      description: 'If even princess that rises the Sun cannot be safe, than what?',
      author: 'Moorchik Barsick',
      keyWords: ['AI', 'Work', 'Tendencies'],
      mainText: ''
    },
    {
      title: 'Unicoders LLC are hiring',
      imgUrl: '',
      date: '07.12.2025 01:31',
      viewsAmmount: 267,
      description: 'Famous unicorn company searching for new employees. Who they are? Should you try?',
      author: 'Glitsy Glam',
      keyWords: ['Work', 'Hiring'],
      mainText: ''
    },
    {
      title: 'Which region has the most programmers in 2025',
      imgUrl: ' ',
      date: '07.12.2025. 02:45',
      viewsAmmount: 234,
      description: 'Ponyvile had record for 10 years. Has anything changed?',
      author: 'Cloudy Storm',
      keyWords: ['Tendencies'],
      mainText: ''
    }
  ]
}
