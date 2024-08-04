import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  constructor(private _dataS: DataService){};
  products: any[] = [];
  ngOnInit(): void {
      this._dataS.getProducts().subscribe(data =>{
        this.products = data.products;
        console.log(this.products)
      })
  }
  deleteProduct(index: number){
    this.products.splice(index, 1);
  }

  addProduct(){
    let product = {title: 'product1', body: 'my product 1', userId: 1};
    this._dataS.addProduct(product).subscribe(data =>{
      console.log(data);
    }
    )
  }
}
