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
  //backspace
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
        console.log(lastNum)
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
    if (this.userInput.toString().lastIndexOf("π") > pos) pos = this.userInput.lastIndexOf("π")
    if (this.userInput.toString().lastIndexOf("e") > pos) pos = this.userInput.lastIndexOf("e")
    if (this.userInput.toString().lastIndexOf("sin(") > pos) pos = this.userInput.lastIndexOf("sin(")





    console.log('Last ' + this.userInput.substr(pos + 1))
    return this.userInput.substr(pos + 1)
  }

  pressOperator(oprate: any) {
    // if (this.userInput == "") {
    //   return;
    // }
    console.log(this.userInput)
    let lastKey = this.userInput[this.userInput.length - 1]
    console.log(lastKey)
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+'
      || lastKey === "%" || lastKey === "!" || lastKey === "π") {
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

    // if (this.operator === "+" || this.operator === "-" || this.operator === "/" || this.operator === "*") {
    //   this.result = eval(this.userInput);


    // }
    if (this.operator === "%") {
      const index = this.userInput.toString().indexOf("%");
      console.log(index);
      let num = this.userInput[index - 1];
      let percent = (this.userInput[index + 1]) ? (num * this.userInput[index + 1]) : (num / 100);
      this.result = percent;


    }
    if (this.operator === "!") {
      const index = this.userInput.toString().indexOf("!");
      console.log(index);
      let num = this.userInput[index - 1], fact = 1;
      for (let i = num; i > 0; i--) {
        fact *= i;
        console.log(fact);

      }
      this.result = fact;
    }
    if (this.operator === "π") {
      console.log(this.operator)
      const index = this.userInput.toString().indexOf("π");
      let num = this.userInput[index - 1], pi = 22 / 7;
      this.result = num * pi;
      console.log(num * pi);

    }
    if (this.operator === "e") {
      console.log(this.operator);
      const index = this.userInput.toString().indexOf("e");
      let num = this.userInput[index - 1], e = 2.7182818285;
      this.result = num * e;
      console.log(num * e);

    }
    // if(this.operator==="²"){
    //   console.log(this.operator);
    //   const index = this.userInput.toString().indexOf("²");
    //   let num = this.userInput[index - 1]
    //   this.result = num * num;  

    // }
    if (this.operator === "²") {
      console.log(this.userInput.split(this.operator));
      this.inputArr = this.userInput.split(this.operator);
      const index = this.userInput.indexOf("²")
      console.log(index);
      console.log(this.userInput[index - 1]);
      this.result = this.userInput[index - 1] * this.userInput[index - 1];

    }
    if (this.operator === "^") {
      console.log(this.operator);
      const index = this.userInput.toString().indexOf("^");
      if (!this.userInput[index + 1]) this.result = null

      // console.log(this.userInput[index-1],this.userInput[index+1])
      else {
        const num = Math.pow(this.userInput[index - 1], this.userInput[index + 1]);
        this.result = num;
      }


    }
    if (this.operator === "cos(") {
      console.log(this.operator);
      const index = this.userInput.toString().indexOf("cos(")+4;
      console.log(index);
      // console.log(this.userInput[index + 4]);
      console.log(this.userInput.slice(index));
      console.log(eval(this.userInput.slice(index)));
      let num = Math.cos(eval(this.userInput.slice(index)))
      this.result = num;


    }
    // if(this.operator==="cos("){
    //   this.inputArr=this.userInput.split(this.operator);
    //   console.log(this.inputArr)
    //   // let num=eval(this.inputArr);
    //   // console.log(num)
    //   // let m=Math.cos(num);
    //   // this.result=m;

    // }
    if (this.operator === "sin(") {
      console.log(this.operator);
      const index = this.userInput.toString().indexOf("sin(");
      console.log(index);
      console.log(this.userInput[index + 4]);
      // console.log(eval(this.userInput+4))
      let num = Math.sin(eval(this.userInput[index + 4]))
      this.result = num;


    }
    if (this.operator === "tan(") {
      console.log(this.operator);
      const index = this.userInput.toString().indexOf("tan(");
      console.log(index);
      console.log(this.userInput[index + 4]);
      let num = Math.sin(this.userInput[index + 4])
      this.result = num;

    }
    if (this.operator === "√") {
      console.log(this.operator);
      const index = this.userInput.toString().indexOf("√");
      if (!this.userInput[index + 1]) this.result = null;
      const num = (!this.userInput[index - 1]) ? Math.sqrt(this.userInput[index + 1]) : (this.userInput[index - 1] * Math.sqrt(this.userInput[index + 1])
      )

      this.result = num;

      // console.log(this.userInput[index-1],this.userInput[index+1])

    }
    if (this.operator === "log(") {
      const index = this.userInput.toString().indexOf("log(");
      // let num= Math.log10(this.userInput[index+4])
      console.log(this.userInput[index + 4], this.userInput[index - 1])

      const num = (!this.userInput[index - 1]) ?
        Math.log10(this.userInput[index + 4]) : (this.userInput[index - 1] * Math.log10(this.userInput[index + 4]))
      // const num=Math.log10(eval(this.userInput))
      this.result = num;


    }
    // if (this.operator === "ln(") {
    //   const index = this.userInput.toString().indexOf("ln(");
    //   // let num= Math.log10(this.userInput[index+4])
    //   console.log(this.userInput[index + 3], this.userInput[index - 1])

    //   const num = (!this.userInput[index - 1]) ?
    //     Math.log(this.userInput[index + 3]) : (this.userInput[index - 1] * Math.log(this.userInput[index + 3]))
    //   // const num=Math.log10(eval(this.userInput))
    //   this.result = num;
    //   // this.userInput=this.result


    // }
    if(this.operator==="ln("){
      this.inputArr=this.userInput.split(this.operator);
      console.log(this.inputArr)
      const num=(!this.inputArr[0])?Math.log(this.inputShow[1]):(this.inputArr[0]*Math.log(this.inputArr[1]))
      this.result=num;
    }

    // if (this.userInput.includes("+")) {
    //   this.inputArr = this.userInput.split(this.operator)
    //   console.log(this.inputArr);
    //   let sum = 0;
    //   for (let index = 0; index < this.inputArr.length ; index++) {

    //     console.log(index, this.inputArr[index]);
    //     sum = sum + parseFloat(this.inputArr[index])
    //   }
    //   this.inputArr.splice(0, this.inputArr.length, sum)
    //   console.log(this.inputArr);

    //   console.log(sum)
    //   // let index=this.inputArr.indexOf(this.operator)
    //   // console.log(index)

    //   // let total = parseFloat(this.inputArr[0]) + parseFloat(this.inputArr[1]);
    //   // console.log(total)
    //   // this.inputArr.splice(0, 3, total);
    //   // console.log(this.inputArr)
    //   // let total=parsefloat(this.inputArr[index])

    // }




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





  ngOnInit(): void {

  }


}
