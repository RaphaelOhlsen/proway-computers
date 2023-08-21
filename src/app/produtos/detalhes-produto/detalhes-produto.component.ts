import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from '../../carrinho.service';
import { NotificationService } from '../../notification.service';
import { ProdutosService } from '../../produtos.service';
import { IProduto, IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent {
  produto: IProduto | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private carrinhoService: CarrinhoService,
  ) {}

    ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const productId = Number(routeParams.get('id'));
      this.produto = this.produtosService.getById(productId);
    }

    adicionarAoCarrinho() {
      this.notificationService.notify('Produto adicionado ao carrinho');
      const produto: IProdutoCarrinho = {
        ...this.produto!,
        quantidade: this.quantidade
      }
      this.carrinhoService.adicionarAoCarrinho(produto);
    }
}
