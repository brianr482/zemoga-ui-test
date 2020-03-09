import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { HeroComponent } from './components/hero/hero.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ListComponent } from './components/list/list.component';
import { MessageComponent } from './components/message/message.component';
import { AddCelebrityComponent } from './components/add-celebrity/add-celebrity.component';
import { FooterComponent } from './components/footer/footer.component';
import { VotingCardComponent } from './components/voting-card/voting-card.component';
import { OpinionCardComponent } from './components/opinion-card/opinion-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TopbarComponent,
    ListComponent,
    MessageComponent,
    AddCelebrityComponent,
    FooterComponent,
    VotingCardComponent,
    OpinionCardComponent
  ],
  imports: [
    // Angular
    BrowserModule,

    // Core & Shared
    CoreModule,
    SharedModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
