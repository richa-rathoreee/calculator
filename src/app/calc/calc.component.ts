import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  inputShow: any = "";
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
    this.inputShow = "";

  }
  //key number press function
  pressKey(num: any) {
    //Do Not Allow . more than once
    if (num == ".") {
      if (this.userInput != "") {

        const lastNum = this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }



    if (num == "0") {
      if (this.userInput == "") {
        return;
      }
   
    }
    this.userInput = this.userInput + num
    this.getAnswer()


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

  getLastOperand() {
    let pos: number;
    console.log(this.userInput)
    pos = this.userInput.toString().lastIndexOf("+")
    if (this.userInput.toString().lastIndexOf("-") > pos) pos = this.userInput.lastIndexOf("-")
    if (this.userInput.toString().lastIndexOf("*") > pos) pos = this.userInput.lastIndexOf("*")
    if (this.userInput.toString().lastIndexOf("/") > pos) pos = this.userInput.lastIndexOf("/")
    if (this.userInput.toString().lastIndexOf("%") > pos) pos = this.userInput.lastIndexOf("%")
    if (this.userInput.toString().lastIndexOf("!") > pos) pos = this.userInput.lastIndexOf("!")


    console.log('Last ' + this.userInput.substr(pos + 1))
    return this.userInput.substr(pos + 1)
  }

  pressOperator(oprate: any) {
    if(this.userInput==""){
      return;
    }
    console.log(this.userInput)
    let lastKey = this.userInput[this.userInput.length - 1]
    console.log(lastKey)
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' 
    || lastKey === "%" || lastKey === "!" || lastKey==="π") {
      return;
    }
    this.userInput += oprate;
    this.operator = oprate;
    this.getAnswer();


  }


  // get the result of expression
  getAnswer() {
    console.log(this.userInput);
    console.log(this.operator)
    // this.inputArr = this.userInput.split(this.operator);
    // console.log(this.inputArr)
    // let operandOne = parseFloat(this.inputArr[0])
    // console.log(operandOne);
    // for (let i = 0; i <= this.inputArr.length - 1; i++) {
    //   console.log(i, this.inputArr[i]);
    //   console.log(i + 1, this.inputArr[i + 1])
    //   let num = parseFloat(this.inputArr[i + 1]);
    //   if (this.operator === "%") {
    //     if (!num) {
    //       operandOne = operandOne / 100;
    //       this.inputArr[0] = operandOne
    //       console.log(this.inputArr[i])
    //       console.log(operandOne);
    //       break;
    //     }
    //     else {
    //       operandOne = operandOne * num / 100;
    //       this.inputArr[0] = operandOne
    //       console.log(this.inputArr[i])

    //       console.log(operandOne);
    //       break;

    //     }

    //   }
    //   else {
    //     operandOne = eval(this.userInput)
    //     this.result = operandOne;
    //   }

    // }
    if(this.operator==="+"|| this.operator==="-"||this.operator==="%"||this.operator==="*"){
      this.result=eval(this.userInput);

    }
    if(this.operator==="%"){
      const index=this.userInput.toString().indexOf("%");
      console.log(index);
      let num=this.userInput[index-1];
     let percent= (this.userInput[index+1])?(num*this.userInput[index+1]):(num/100);
     this.result=percent;


    }
    if(this.operator==="!"){
      const index=this.userInput.toString().indexOf("!");
      console.log(index);
     let num=this.userInput[index-1],fact=1;
     for(let  i=num; i>0;i--) {
       fact*=i;
       console.log(fact);

      }
      this.result=fact;
    }
    if(this.operator==="π"){
      console.log(this.operator)
      const index=this.userInput.toString().indexOf("π");
     let num=this.userInput[index-1],pi=22/7;
     this.result=num*pi;
     console.log(num*pi)
      


    }

  }
  showAns() {
    const res = document.getElementById("res") as HTMLElement
    res.style.fontSize = "50px"
    this.result = this.result

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

  log() {




  }
  ln() {
    this.userInput = `ln(${this.userInput})`
    this.result = Math.log(this.result);

  }
  sqrt() {
    this.result = Math.sqrt(this.userInput);
  }

  ngOnInit(): void {

  }


}
