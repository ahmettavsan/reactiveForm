import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

productArray?:Product[]=[];
  formGroup=this.fb.group({
    name:[''],
    price:[0],
    category:[0],
    isPublish:[false]
  })
  constructor(private fb:FormBuilder){

  }

  category:Category[]=[
    {text:'seçiniz',value:0},
    {text:'kalemler',value:1},
    {text:'kitaplar',value:2},
    {text:'defterler',value:3},

  ]

  save(){

console.log(222);
  let newProduct=this.formGroup.value as Product;
   this.productArray?.push(newProduct);
   console.log(this.productArray);

  }


}


interface Category{
  text:string,
  value:number
}
