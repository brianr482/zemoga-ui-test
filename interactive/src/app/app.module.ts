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
import { OpinionCardComponent } from './components/opinion-card/opinion-card.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { PastTrialsComponent } from './pages/past-trials/past-trials.component';
import { AuthComponent } from './pages/auth/auth.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TopbarComponent,
    ListComponent,
    MessageComponent,
    AddCelebrityComponent,
    FooterComponent,
    OpinionCardComponent,
    HowItWorksComponent,
    PastTrialsComponent,
    AuthComponent,
    MainComponent
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
