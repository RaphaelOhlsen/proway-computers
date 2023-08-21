import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CarrinhoComponent],
  imports: [
    CommonModule,
    CarrinhoRoutingModule,
    FormsModule,
    SharedModule,
  ],
})
export class CarrinhoModule {}
