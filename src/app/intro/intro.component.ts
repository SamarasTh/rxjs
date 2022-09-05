import { SongsService } from './../services/songs.service';
import { Component, OnInit } from '@angular/core';
import {from, subscribeOn} from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(private service: SongsService) { }

  songs: any;
  loading = false;
  data: any;
  obsSongs:any;

  ngOnInit(): void {
  }

  getAllSongs() {
    this.songs = this.service.getSongs();
    this.obsSongs = from(this.songs)

    this.obsSongs.subscribe({
      next: (data:any) => this.data = data,
      error : (error:any) => this.data = error,
      // complete: () => this.data = "complete.."
    });


  }



}
