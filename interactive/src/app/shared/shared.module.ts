import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const exportedComponents = [
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
