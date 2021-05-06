import { Component, OnInit } from '@angular/core';
import {PlaylistCarousel} from '../playlist-carousel.model';


@Component({
  selector: 'app-playlist-carousel',
  templateUrl: './playlist-carousel.component.html',
  styleUrls: ['./playlist-carousel.component.css']
})
export class PlaylistCarouselComponent implements OnInit {

  PlaylistCarousel: PlaylistCarousel[]=[
    new PlaylistCarousel("Recently played", PlaylistCarousel[0], "<>"  ),
    new PlaylistCarousel("Featured playlists", PlaylistCarousel[1], "<>"  ),
    new PlaylistCarousel("Mood", PlaylistCarousel[2], "<>"  ),





  ];

  constructor() { }

  ngOnInit(): void {
  }

}
