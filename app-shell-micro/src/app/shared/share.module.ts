import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/**
 * The ShareModule is a shared Angular module that provides common functionality and imports for other modules in the application.
 * It imports the CommonModule, FormsModule, ReactiveFormsModule, and RouterModule, and exports these modules so they can be used by other modules.
 * This allows for consistent use of these common modules across the application.
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ShareModule { }
