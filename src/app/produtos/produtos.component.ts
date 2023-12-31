import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { IProduto } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  produtos:IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const produtos = this.produtosService.getAll();
    this.route.queryParams.subscribe(params => {
      const descricao = params['descricao']?.toLowerCase();
      if(descricao) {
        this.produtos = produtos.filter(produto =>
          produto.descricao.toLowerCase().includes(descricao)
        );
        return;
      }
      this.produtos = produtos;
    });
  }
}
