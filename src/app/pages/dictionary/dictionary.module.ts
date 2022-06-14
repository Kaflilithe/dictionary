import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DictionaryRoutingModule } from './dictionary-routing.module';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DictionaryComponent
  ],
  imports: [
    CommonModule,
    DictionaryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DictionaryModule { }
