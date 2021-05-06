import {Playlist} from './playlist.model';

export class PlaylistCarousel{
    public title: string;
    public listOfPlaylists: Playlist;
    public NavigationArrows: string;
    constructor(title: string, listOfPlaylists: Playlist , NavigationArrows: string ){
        this.title=title;
        this.listOfPlaylists=listOfPlaylists;
        this.NavigationArrows=NavigationArrows;
    }
  }
  
  
  