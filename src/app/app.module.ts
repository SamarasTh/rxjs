import { SongsService } from './services/songs.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SimpleHttpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
