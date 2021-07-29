import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

inputShow:any="";
  userInput: any = "";
  result: any = "";
  operandOne: any = "";
  operandTwo: any = "";
  operator: any = "";
  inputArr: any = [];

  constructor() {


  }
  // cleaar the screen
  clearScreen() {
    this.userInput = ""
    this.result = "";
    this.operator = ""

  }
  backSpace() {
    this.userInput = this.userInput.substr(0, this.userInput.length - 1);
    this.result = "";
    this.inputShow="";

  }
  //key number press function
  pressKey(num: any) {
    this.userInput=this.userInput+num;

    this.getAnswer();
 

    if (this.userInput.length > 10) {
      const input = document.getElementById("userinput") as HTMLElement
      const res = document.getElementById("res") as HTMLElement

      console.log(input);
      console.log(res);

      
      input.style.fontSize = "18px"
      input.className = "wrap"
      res.style.fontSize = "25px"

    }

  }



  pressOperator(oprate: any) {
    console.log(this.userInput)
    let lastKey=this.userInput[this.userInput.length-1]
    console.log(lastKey)
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+'|| lastKey==="%")  {
      return;
    }
    this.userInput+=oprate;
    this.operator=oprate;
    


  }


  // get the result of expression
  getAnswer() {
    if(this.userInput.includes("%")){

    }
    this.result=eval(this.userInput)
    console.log(this.userInput);
    console.log(this.operator);



    
  }
  showAns() {
    const res = document.getElementById("res") as HTMLElement
    res.style.fontSize = "50px"
    this.userInput = ""
  }

  negative() {


    if (Math.sign(parseInt(this.userInput)) === 1) {
      const sign = -Math.abs(parseInt(this.userInput));
      this.userInput = sign.toString();
    } else if (Math.sign(parseInt(this.userInput)) === -1) {
      const sign = Math.abs(parseInt(this.userInput));
      this.userInput = sign.toString();
    } else {
      this.userInput = this.userInput;
    }






  }
  // ///////

log(){
  
  // this.inputShow=`${this.userInput}log(${this.userInput})`
  this.result=Math.log(this.userInput)


}
ln(){
  // this.inputShow=`ln(${this.userInput})`;
  this.result=Math

}

  ngOnInit(): void {

  }
  

}
