import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { EpisodeDetailComponent } from './episode-detail.component';
import { EpisodeService } from './episode.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EpisodeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EpisodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
