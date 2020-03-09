import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { PastTrialsComponent } from './pages/past-trials/past-trials.component';
import { AuthComponent } from './pages/auth/auth.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'how-it-works',
    component: HowItWorksComponent,
  },
  {
    path: 'past-trials',
    component: PastTrialsComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
