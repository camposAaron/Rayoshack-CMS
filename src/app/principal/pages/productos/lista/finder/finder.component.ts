import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Categoria } from 'src/app/models';
import { ProductosServicesService } from '../../services/productos-services.service';


@Component({
  selector: 'finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {
  
  @Output() toFind = new EventEmitter<string>();

  public value = "";
  public categories!: Categoria[];
  public marcas: string[];
  
  @Output() categorySelectedValue = new EventEmitter<string>();
  @Output() marcaSelectedValue = new EventEmitter<string>();
  @Output() isInStock = new EventEmitter<boolean>();

  constructor(private _productService : ProductosServicesService) { 
    this.marcas = [];
  }

  ngOnInit(): void {
    this.getCategories();
    this.getBranches();
  }

  getCategories(){
    this._productService.getCategories().subscribe(
      categories => {
        this.categories = categories;
      }
    )
  }

  changeCategory(category: string){
    this.categorySelectedValue.emit(category);
  }

  changeBranch(branch: string){
    this.marcaSelectedValue.emit(branch);
  }

  changeStock(checked: boolean){
    console.log(checked);
    this.isInStock.emit(checked);
  }

  getBranches(){
    this._productService.getProducts().subscribe(
      products => {
        
        products.forEach(product => {
          this.marcas.push(product.marca) 
        });

        this.marcas = this.marcas.filter((item, index)=>{
          return this.marcas.indexOf(item) === index;
        });

      }
    )
  }

  changeValue(value: string){
    this.toFind.emit(value);
  }

}
