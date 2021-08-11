import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  userInput: any = "";//input from calc
  result: any = "";//result
  operator: any = "";//operators
  inputArr: any = [];//array for input
  inv: any = false;//inv for inverse toggling
  deg: any = false;//for degree


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
    console.log(this.userInput)

    this.result = "";

  }
  // for open bracket 
  openBracket() {
    this.userInput = this.userInput + "(";

  }
  //close bracket 
  closeBracket() {
    this.userInput = this.userInput + ")";
    console.log(this.userInput)

  }

  inverse() {
    this.inv = this.inv ? false : true


  }
  degree(): any {
    this.deg = false;
    this.getAnswer()


  }
  radian() {
    this.deg = true;
    this.getAnswer()

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



    // if (num == "0") {
    //   if (this.userInput == "") {
    //     return;
    //   }

    // }
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

  // get operator function

  pressOperator(oprate: any) {
    // if (this.userInput == "") {
    //   return;
    // }
    console.log(this.userInput)
    let lastKey = this.userInput[this.userInput.length - 1]
    console.log(lastKey)
    //operand dont repeat
    if (lastKey === '/' || lastKey === '*' ||
      lastKey === '-' || lastKey === '+' || lastKey === '%'
      || lastKey === "!" || lastKey === "π") {
      return;
    }
    this.userInput += oprate;
    this.operator = oprate;
    this.getAnswer();
  }

  // get the result of expression
  getAnswer() {
    console.log(this.userInput);

    // for +,-,*,/ operation
    if (this.operator === "+" ||
      this.operator === "-" ||
      this.operator === "/" ||
      this.operator === "*") {
   this.result=eval(this.userInput)

    }
    //for % operation
    if (this.operator === "%") {
      let index = this.userInput.indexOf("%");
      let sub1 = this.userInput.slice(0, index)
      sub1 = eval(sub1);
      this.userInput = sub1 + "/" + "100" + (+(this.userInput[index + 2]) ? "/" : '')
        + this.userInput.slice(index + 2);
      this.result = eval(this.userInput);

    }

    // for factorial
    if (this.operator === "!") {
      let index = this.userInput.indexOf("!");
      let sub1 = this.userInput.slice(0, index)
      sub1 = eval(sub1)
      let num = sub1, fact = 1;
      for (let i = num; i > 0; i--) {
        fact *= i;
        this.userInput = fact + (+(this.userInput[index + 1]) ? "*" : '')
          + this.userInput.slice(index + 2);
        console.log(fact);
        console.log(this.userInput);
      }
      this.result = (num < 0) ? "no such factorial" : eval(this.userInput)
    }

    //for pi
    if (this.operator === "π") {
      let index = this.userInput.indexOf("π");
      let sub1 = this.userInput.slice(0, index)
      sub1 = eval(sub1);
      this.userInput = sub1 + "*" + "22" + "/" + "7" + 
      (+(this.userInput[index + 1]) ? "*" : '') + this.userInput.slice(index + 2);
      this.result = eval(this.userInput);
    }
    // for e btn 
    if (this.operator === "e") {
      let index = this.userInput.indexOf("e");
      let sub1 = this.userInput.slice(0, index);
      sub1 = eval(sub1);
      this.userInput = sub1 + "*" + "2.7182818285" + 
      (+(this.userInput[index + 2]) ? "*" : '')
        + this.userInput.slice(index + 2);
      this.result = eval(this.userInput);
    }
    //for square
    if (this.operator === "²") {
      let index = this.userInput.indexOf("²");
      console.log(index);
      let sub1 = this.userInput.slice(0, index).split("")
      sub1 = eval(sub1.join(""))
      console.log(sub1);
      let square = sub1 * sub1
      this.userInput = square + (+(this.userInput[index + 2]) ? "*" : '') + 
      this.userInput.slice(index + 2);
      this.result = eval(this.userInput)
    }
    // for 1/number    
    if (this.operator === "1/") {
      console.log(this.operator);
      let index = this.userInput.indexOf("1/") + 2
      console.log(index);
      console.log(this.userInput.slice(index));
      let sub = eval(this.userInput.slice(index)), num;
      console.log(sub)
      num = 1 / sub;
      this.result = num;
}
    // cube    
    if (this.operator === "³") {
      let index = this.userInput.indexOf("³");
      console.log(index);
      let sub1 = this.userInput.slice(0, index).split("")
      sub1 = eval(sub1.join(""))
      console.log(sub1);
      let square = sub1 * sub1 * sub1
     this.userInput = square + (+(this.userInput[index + 2]) ? "*" : '') + 
     this.userInput.slice(index + 2);
      this.result = eval(this.userInput)

    }

    //for ^ power     
    if (this.operator === "^") {
      let index = this.userInput.indexOf("^");
      console.log(index);
      let sub1 = this.userInput.slice(0, index)
      sub1 = eval(sub1);
      this.inputArr = this.userInput.split(this.operator);
      console.log(this.inputArr);
      const num = Math.pow(sub1, this.inputArr[1])
      this.result = num;
    }
    //2^x
    if (this.operator === "2^") {
      let index = this.userInput.indexOf("2^") + 1;
      console.log(index);
      let sub1 = this.userInput.slice(0, index)
      sub1 = eval(sub1);
      this.inputArr = this.userInput.split(this.operator);
      console.log(this.inputArr);
      const num = Math.pow(2, this.inputArr[1])
      // this.userInput=sub1+"*"+this.operator +this.inputArr[1]
      // this.result=eval(sub1);
      this.result = num;

    }
    // for exponential    
    if (this.operator === "e^") {
      console.log(this.operator)
      this.inputArr = this.userInput.split(this.operator);
      console.log(this.inputArr);
      if (!this.inputArr[1]) this.result = null;
      else {
        const num = Math.exp(this.inputArr[1]);
        this.result = num;
      }

    }

    //for cube root     
    if (this.operator === "∛") {
      let index = this.userInput.indexOf("∛")
      console.log(index)
      console.log((eval(this.userInput.slice(index + 1))))
      let sub = eval(this.userInput.slice(index + 1)), num;
      num = Math.cbrt(sub)
      this.result = num
    }

    // cosine
    if (this.operator === "cos(") {

      console.log(this.operator);
      console.log(this.userInput)
      const index = this.userInput.toString().indexOf("cos(") + 4;
      console.log(index);
      let sub = eval(this.userInput.slice(index)), num;
      if (this.deg) {
        console.log("deg");
        num = Math.cos(eval(sub) * (Math.PI / 180))

      }
      else {
        num = Math.cos(eval(this.userInput.slice(index)))
      }
      this.result = num;
    }
    //sin 
    if (this.operator === "sin(") {

      console.log(this.operator);
      const index = this.userInput.toString().indexOf("sin(") + 4;
      console.log(index);
      let sub = eval(this.userInput.slice(index)), num;
      if (this.deg) {
        console.log("deg");
        num = Math.sin(eval(sub) * (Math.PI / 180))
      }
      else {
        num = Math.sin(eval(sub))
      }
      this.result = num;
    }
    //tan    
    if (this.operator === "tan(") {
      console.log(this.operator);
      const index = this.userInput.toString().indexOf("tan(") + 4;
      console.log(index);
      let sub = eval(this.userInput.slice(index)), num;
      if (this.deg) {
        console.log("deg");
        num = Math.cos(eval(sub) * (Math.PI / 180))

      }
      else {
        num = Math.tan(eval(sub))
      }
      this.result = num;

    }
    //square root    
    if (this.operator === "√") {
      this.inputArr = this.userInput.split(this.operator);

      console.log(this.operator);
      // const index = this.userInput.toString().indexOf("√");
      if (!this.inputArr[1]) this.result = null;
      const num = (!this.inputArr[0]) ? Math.sqrt(this.inputArr[1]) :
        (this.inputArr[0] * Math.sqrt(this.inputArr[1])
        )
      this.result = num;
    }

    //log 10
    if (this.operator === "log(") {
      // let index=this.userInput.indexOf("log(")+3;
      // console.log(this.userInput.length-1);
      // console.log(index+1,this.userInput[index+1]);
      // let sub=this.userInput.slice(index+1,this.userInput.length);
      // console.log(sub);
      // console.log(eval(sub))
      // this.result=eval(sub)
      this.inputArr = this.userInput.split(this.operator);

      console.log(this.operator);
      // const index = this.userInput.toString().indexOf("√");
      if (!this.inputArr[1]) this.result = null;
      const num = (!this.inputArr[0]) ? Math.log10(this.inputArr[1]) :
        (this.inputArr[0] * Math.log10(this.inputArr[1])
        )
      this.result = num;

    }
    //loge
    if (this.operator === "ln(") {
      this.inputArr = this.userInput.split(this.operator);
      console.log(this.inputArr)
      const num = (!this.inputArr[0]) ? Math.log(this.inputArr[1]) :
        (this.inputArr[0] * Math.log(this.inputArr[1]))
      this.result = num;
    }
    //sin inverse
    if (this.operator === "sin-1(") {
      // let index=this.userInput.indexOf("sin-1(")+5;

      this.inputArr = this.userInput.split(this.operator)
      console.log(this.inputArr)
      if (!this.inputArr[1]) {
        this.result = null;
      }
      const num = Math.asin(this.inputArr[1]);
      this.result = num

    }
    // cos inverse    
    if (this.operator === "cos-1(") {
      this.inputArr = this.userInput.split(this.operator)
      console.log(this.inputArr)
      if (!this.inputArr[1]) {
        this.result = null;
      }
      const num = Math.acos(this.inputArr[1]);
      this.result = num

    }
    //tan inverse    
    if (this.operator === "tan-1(") {
      this.inputArr = this.userInput.split(this.operator)
      console.log(this.inputArr)
      if (!this.inputArr[1]) {
        this.result = null;
      }
      const num = Math.atan(this.inputArr[1]);
      this.result = num

    }
  }
  showAns() {
    const res = document.getElementById("res") as HTMLElement
    res.style.fontSize = "50px"
    this.userInput = ""
    this.result = this.result
  }
  //negative /positive 
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
