import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent implements OnInit {

  strr:any="hello i am richa       ";

  constructor() { 
    console.log(this.strr.length);
    console.log(this.strr.slice(2,6))
    console.log(this.strr)
    console.log(this.strr.substring(2,6))
    console.log(this.strr.substring(2))

    console.log(this.strr)
    console.log(this.strr.substr(2,7))

    console.log(this.strr)
    console.log(this.strr.trim())
    console.log(this.strr.length);
console.log(this.strr.padEnd(4,0) )
console.log(this.strr.padStart(4,0) )
console.log(this.strr.charCodeAt(0) )
console.log(this.strr.split(","))


  }

  ngOnInit(): void {
  }

}
