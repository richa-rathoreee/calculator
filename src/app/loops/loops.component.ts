import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css']
})
export class LoopsComponent implements OnInit {
  arr:any=["1","2","3","4","5"];
  arr2:any=["1","*","3","/","4","+","7"];

  constructor() { 
    let sum=0;
  this.arr.forEach((ele:any,i:any,arr:any) => {
    sum+=parseInt(ele);
    arr=[]
    console.log(sum)
    console.log(ele)
    console.log(i)
    console.log(arr);
    
    arr.push(sum)
    


    });
  }

  ngOnInit(): void {


  }

}
