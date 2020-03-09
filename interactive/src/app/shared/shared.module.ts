import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VotingCardComponent } from './components/voting-card/voting-card.component';
import { AlertComponent } from './components/alert/alert.component';

const exportedComponents = [
  VotingCardComponent,
  AlertComponent,
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
    declarations: [
      ...exportedComponents,
    ],
  exports: [
    CommonModule,
    FormsModule,
    ...exportedComponents,
  ]
})
export class SharedModule { }
