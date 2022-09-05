import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor() { }

  getSongs() {

    return [
     { title: '1904', artist: 'The Tallest Man on Earth', rating: 2, isOnPlayList: true },
     { title: 'Lonesome Town', artist: 'Ricky Nelson', rating: 9, isOnPlayList: false },
     { title: 'Love in the Library', artist: 'Jimmy Buffett', rating: 7, isOnPlayList: true },
     { title: 'Nothing Else Matters', artist: 'Metallica', rating: 9, isOnPlayList: true },
     { title: 'Sugar Mountain', artist: 'Neil Young', rating: 3, isOnPlayList: false },
     { title: 'The Needle and the Damage Done', artist: 'Neil Young', rating: 8, isOnPlayList: true },
     { title: 'Lean On Me', artist: 'Bill Withers', rating: 3, isOnPlayList: false },
     { title: 'Patience', artist: 'Guns N Roses', rating: 6, isOnPlayList: true },
     { title: 'You Belong With Me', artist: 'Taylor Swift', rating: 9, isOnPlayList: false }
    ];
  }
}
