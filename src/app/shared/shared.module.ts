import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatarMoedaPipe } from './formatar-moeda.pipe';



@NgModule({
  declarations: [
    FormatarMoedaPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatarMoedaPipe,
  ],
})
export class SharedModule { }
