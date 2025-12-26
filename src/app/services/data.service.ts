import { Injectable } from '@angular/core';
import { News } from '../news-card-interface';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})

export class DataService{
    items: News[]=[
    {
      id: 1,
      title: 'Twighlight Sparkle recommends learning JS!',
      imgUrl: 'TwiJS.png',
      date: '06.12.2005 22:55',
      viewsAmmount: 376,
      description: 'Princess of Equestria shares her opinion on JavaScript usability.',
      author: 'Julia Diachenko',
      keyWords: ['JavaScript','Programming','Learning','Interview'],
      mainText: `Twilight demonstrates strong organizational skills throughout the series. 
      In Winter Wrap Up, she delegates responsibilities to the residents of Ponyville so that they finish 
      their seasonal cleaning effort on time, leading them to name her the "All-Team Organizer". 
      During the cider-making contest in The Super Speedy Cider Squeezy 6000, Twilight assigns tasks 
      to Pinkie Pie, Rarity, Fluttershy, and Rainbow Dash to help raise the Apple family's rate of production,
      leading to a five-fold increase.
      Twilight's ability as a teacher is proven in that she succeeds in teaching all three Crusaders the skills 
      she intended to teach them. They all demonstrate a high degree of aptitude at the end of their lessons.
      Twilight attempts to teach Rainbow Dash the history of the Wonderbolts, but her methods of study prove 
      futile when Rainbow Dash acts as a class clown in Testing Testing 1, 2, 3. In The Cutie Re-Mark - Part 2, 
      Twilight takes Starlight Glimmer on as a student, and she attempts to give Starlight her first friendship 
      lesson in The Crystalling - Part 1 by sending her to reunite with Sunburst. 
      In the end, Twilight laments about her alleged failure, but Spike renews her resolve.`
    },
    {
      id: 2,
      title: 'Princess Celestia worried abot AI taking her place!',
      imgUrl: 'CelAI.png',
      date: '06.12.2025 23:44',
      viewsAmmount: 1023,
      description: 'If even princess that rises the Sun cannot be safe, than what?',
      author: 'Moorchik Barsick',
      keyWords: ['AI', 'Work', 'Tendencies'],
      mainText: 'BBBBBBBBBBBBBBBBB'
    },
    {
      id: 3,
      title: 'Unicoders LLC are hiring',
      imgUrl: 'Unicoders.png',
      date: '07.12.2025 01:31',
      viewsAmmount: 267,
      description: 'Famous unicorn company searching for new employees. Who are they? Should you try?',
      author: 'Glitsy Glam',
      keyWords: ['Work', 'Hiring'],
      mainText: 'CCCCCCCCCCCCCCCCCCCCCCCCC'
    },
    {
      id: 4,
      title: 'Which region has the most programmers in 2025',
      imgUrl: 'Ponyvile.png',
      date: '07.12.2025. 02:45',
      viewsAmmount: 234,
      description: 'Ponyvile had record for 10 years. Has anything changed?',
      author: 'Nikity Nix',
      keyWords: ['Tendencies'],
      mainText: 'DDDDDDDDDDDDDDDDDD'
    },
    {
      id: 5,
      title: 'Pegasy ponies are making progress in drone tech',
      imgUrl: 'PegaDrones.png',
      date: '11.12.2025. 03:16',
      viewsAmmount: 329,
      description: 'Why are they even doing this? We already can just ask birds to do whatewer we want!',
      author: 'Cloudy Storm',
      keyWords: ['Technology', 'Drones', 'Progress'],
      mainText: 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEE'
    },
    {
      id: 6,
      title: 'New wersion of EquestrIA app!',
      imgUrl: 'EquestrIA.png',
      date: '011.12.2025. 03:20',
      viewsAmmount: 563,
      description: 'Latest app version will authomatically get your cutie mark data. How is that even possible?',
      author: 'Minty Blossom',
      keyWords: ['Tendencies', 'Progress'],
      mainText: 'FFFFFFFFFFFFFFFFFFFFFFFF'
    }  
  ]
    private itemsSubject = new BehaviorSubject<News[]>(this.items);

    getItems(): Observable<News[]> {
    return of(this.items);
  }

  getItemsStream(): Observable<News[]> {
    return this.itemsSubject.asObservable();
  }

  private searchText: string = '';
  private selectedPopularity: string = 'All';

  updateSearch(search:string){
    this.searchText = search;
    this.applyFilters();
  }

  updatePopularity(pop:string){
    this.selectedPopularity = pop;
    this.applyFilters();
  }

  private applyFilters(){
    let filtered = this.items
      .filter(NewsCard => {
        // Фільтрація по радіокнопках
        if (this.selectedPopularity === 'popular') {
          return NewsCard.viewsAmmount>=500;
        } else if (this.selectedPopularity === 'unpopular') {
          return NewsCard.viewsAmmount<500;
        }
        return true; // Повернути всі новини, якщо вибрано "all"
      })
      .filter(NewsCard => {
        // Пошук по заголовку
        return NewsCard.title.toLowerCase().includes(this.searchText.toLowerCase());
      });
      this.itemsSubject.next(filtered);
  }

   getItemById(id: number): News | undefined {
    return this.items.find(d => d.id === id);
  }
}
