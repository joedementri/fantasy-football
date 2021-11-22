import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface ICard {
  content: string;
  imageUrl: string;
  subtitle: string;
  title: string;
  link: string;
}

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  cards: ICard[];

  constructor(private router: Router) {
    let cards = [
      {
        content: 'Use the Player Analyzer Tool to find a specific player and gather scores, predictions, and analysis about that player.',
        imageUrl: 'https://cdn1.iconfinder.com/data/icons/office-322/24/person-user-search-find-avatar-512.png',
        subtitle: 'Analysis Tool',
        title: 'Player',
        link: '/home/player-tool'
      },
      {
        content: 'Use the Team Analyzer Tool to find insights about your team (Sleeper) and find best starters, roster strength, and more.',
        imageUrl: 'https://cdn0.iconfinder.com/data/icons/business-management-123/32/team_business_management_business-512.png',
        subtitle: 'Analysis Tool',
        title: 'Team',
        link: '/home/team-tool'
      },
      {
        content: 'Use the Draft Analyzer Tool to find a specific player and gather scores, predictions, and analysis about that player.',
        imageUrl: 'https://cdn1.iconfinder.com/data/icons/office-322/24/todo-document-doc-paper-list-checkmark-512.png',
        subtitle: 'Analysis Tool',
        title: 'Draft',
        link: '/home/draft-tool'
      },
    ];
    this.cards = cards;
  }

  ngOnInit(): void {
  }

  travelToPage(c: ICard): void {
    console.log(c)
    this.router.navigateByUrl(c.link);
  }

}
