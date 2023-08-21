import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { NotificationService } from '../notification.service';
import { IProdutoCarrinho } from '../produtos/produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  itensCarrinho: IProdutoCarrinho[] = [];

  constructor(
    private carrinhoService: CarrinhoService,
    private notificationService: NotificationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
  }

  removerItem(idProduto: number) {
    this.carrinhoService.removerItemCarrinho(idProduto);
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
  }

  valorTotal() {
    return this.itensCarrinho.reduce(
      (soma, item) => {
        return soma + item.preco * item.quantidade
      }, 0
    );
  }

  comprar() {
    this.notificationService.notify('Compra realizada com sucesso!');
    setTimeout(() => {
      this.carrinhoService.limparCarrinho();
      this.itensCarrinho = [];
      this.router.navigate(['/produtos']);
    }, 4000);
  }
}
