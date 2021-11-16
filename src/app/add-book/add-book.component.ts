import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  BookForm:FormGroup;
  bookList:any;
  BookId:number=0;
  BookName:string="";
  author:string="";
  published:string="";
  noOfCopy:string=""

  updateForm:FormGroup=new FormGroup({});
  bid:number=0;
  bname:string="";

  constructor(private fb:FormBuilder) { 
  this.bookList =[];
 
    
    this.BookForm=this.fb.group({
      BookId:['',Validators.required],
      BookName:['',Validators.required],
      author:['',Validators.required],
      published:['',Validators.required],
      noOfCopy:['',Validators.required]
    })
    
  }
 

  
  ngOnInit(): void {
    this.updateForm=new FormGroup({
      bid:new FormControl(),
      no:new FormControl()
    })
  }
  addItem(){
    this.bookList.push(this.BookForm.value);
     
}
  myValue:any
  removeItem(element: any){
    this.bookList.forEach((value: any,index: any)=>{
      if(value == element)
      this.bookList.splice(index,1);
    });
  }

  
  editform(){
    this.bookList.forEach((value: any,)=>{
      if(value.BookId==this.updateForm.get("bid")?.value){
        value.noOfCopy=this.updateForm.get("no")?.value;
      }
    
      console.log(this.updateForm.get("no")?.value);
    })
  }
    
   


}
class book{
  bookId:number;
  bookName:string;
  author:string;
  publishedDate:string;

  constructor(id:number,name:string,aut:string,date:string){
    this.bookId=id;
    this.bookName=name;
    this.author=aut;
    this.publishedDate=date;
  }

}