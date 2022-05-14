import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import { filter } from 'rxjs';

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

  productList: { id: number, price: number, name: string, status: boolean }[] = [
    {
      id: 1,
      name: "product A",
      price: 2000,
      status: false
    },
    {
      id: 2,
      name: "product B",
      price: 3000,
      status: true
    },
    {
      id: 3,
      name: "product C",
      price: 33000,
      status: true
    },
    {
      id: 4,
      name: "product D",
      price: 32000,
      status: true
    },
    {
      id: 5,
      name: "product E",
      price: 32000,
      status: true
    }
  ]


  onHandleClick() {
    console.log("clickek");
    this.productStatus = !this.productStatus
  }

  onHandleAdd(id:number, name:string, price: number, status: string) {
    

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
