import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor (
    private carrinhoService: CarrinhoService
  ) {}


    totalItens() {
      return this.carrinhoService.obtemCarrinho()?.length || 0;
    }
}
