import { Component } from '@angular/core';
import { NewsCard } from '../news-card/news-card';
import { CommonModule } from '@angular/common';
import { News } from '../../news-card-interface';

@Component({
  selector: 'app-news-list',
  imports: [NewsCard, CommonModule],
  templateUrl: './news-list.html',
  styleUrl: './news-list.css',
})
export class NewsList {
  items: News[]=[
    {
      title: 'Twighlight Sparkle recommends learning JS!',
      imgUrl: 'TwiJS.png',
      date: '06.12.2005 22:55',
      viewsAmmount: 376,
      description: 'Princess of Equestria shares her opinion on JavaScript usability.',
      author: 'Julia Diachenko',
      keyWords: ['JavaScript','Programming','Learning','Interview'],
      mainText: ''
    },
    {
      title: 'Princess Celestia worried abot AI taking her place!',
      imgUrl: 'CelAI.png',
      date: '06.12.2025 23:44',
      viewsAmmount: 1023,
      description: 'If even princess that rises the Sun cannot be safe, than what?',
      author: 'Moorchik Barsick',
      keyWords: ['AI', 'Work', 'Tendencies'],
      mainText: ''
    },
    {
      title: 'Unicoders LLC are hiring',
      imgUrl: 'Unicoders.png',
      date: '07.12.2025 01:31',
      viewsAmmount: 267,
      description: 'Famous unicorn company searching for new employees. Who are they? Should you try?',
      author: 'Glitsy Glam',
      keyWords: ['Work', 'Hiring'],
      mainText: ''
    },
    {
      title: 'Which region has the most programmers in 2025',
      imgUrl: 'Ponyvile.png',
      date: '07.12.2025. 02:45',
      viewsAmmount: 234,
      description: 'Ponyvile had record for 10 years. Has anything changed?',
      author: 'Nikity Nix',
      keyWords: ['Tendencies'],
      mainText: ''
    },
    {
      title: 'Pegasy ponies are making progress in drone tech',
      imgUrl: 'PegaDrones.png',
      date: '11.12.2025. 03:16',
      viewsAmmount: 329,
      description: 'Why are they even doing this? We already can just ask birds to do whatewer we want!',
      author: 'Cloudy Storm',
      keyWords: ['Technology', 'Drones', 'Progress'],
      mainText: ''
    },
    {
      title: 'New wersion of EquestrIA app!',
      imgUrl: 'EquestrIA.png',
      date: '011.12.2025. 03:20',
      viewsAmmount: 563,
      description: 'Latest app version will authomatically get your cutie mark data. How is that even possible?',
      author: 'Minty Blossom',
      keyWords: ['Tendencies', 'Progress'],
      mainText: ''
    }
  ]
}
