import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import { filter } from 'rxjs';
import { IProduct } from './models/Product';
import mockData from '../data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tramnvph14967';
  productName: string = "Product A";
  productPrice: number = 1000;
  productStatus: boolean = false;
  productInfo: { id: number, price: number, name: string } = {
    id: 1,
    name: "product A",
    price: 2000
  };

  productList: IProduct[] = mockData;
  onHandleAdd(product: any) {
    console.log('prduct', product);
    this.productList.push(product);
  }








  onHandleClick() {
    console.log("clickek");
    this.productStatus = !this.productStatus
  }
  onHandleDelete(id: number) {
    alert("Bạn có muốn xóa sản phẩm hay không?");
    this.productList = this.productList.filter(product => product.id !== id)
    console.log(id);
  }
  onHandleKeyPress(event: any) {
    console.log(event.target.value);
    this.title = event.target.value;
  }
} 
