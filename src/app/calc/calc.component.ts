import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  digit: any = ""
  userInput: any = "";
  result: any = "";
  operator: any = "";
  inputArr: any = [];
  inv: any = false;
  deg: any = false;


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

  }
  openBracket() {
    this.userInput = this.userInput + "(";

  }

  closeBracket() {
    this.userInput = this.userInput + ")";

  }
  inverse() {
    this.inv = true;

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
    this.digit = num;
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
    if (lastKey === '/' || lastKey === '*' ||
      lastKey === '-' || lastKey === '+'
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


    if (this.operator === "+" ||
      this.operator === "-" ||
      this.operator === "/" ||
      this.operator === "*") {
      this.result = eval(this.userInput);

    }
    if (this.operator === "%") {
      this.inputArr = this.userInput.split(this.operator)
      console.log(this.inputArr);
      // let percent=this.userInput[0]/100+"%";
      let percent = (this.inputArr[1]) ?
        (this.inputArr[0] * this.inputArr[1]) / 100 + "%" : (this.inputArr[0] / 100);

      this.result = percent;
    }
    if (this.operator === "!") {

      this.inputArr = this.userInput.split(this.operator);

      let num = this.inputArr[0], fact = 1;
      for (let i = num; i > 0; i--) {
        fact *= i;
        console.log(fact)
      }

      this.result = fact;
      (num < 0) ? this.result = "no such factorial" : this.result

    }

    if (this.operator === "π") {
      this.inputArr = this.userInput.split(this.operator);
      console.log(this.inputArr)
      let num = this.inputArr[0], pi = 22 / 7;
      console.log(num);
      if (!this.inputArr[0]) this.result = 3.1415926536

      this.result = num * pi;
      console.log(num * pi);

    }
    if (this.operator === "e") {
      this.inputArr = this.userInput.split(this.operator);
      let num = this.inputArr[0], e = 2.7182818285;
      this.result = num * e;
      console.log(num * e);


    }

    if (this.operator === "²") {
      this.inputArr = this.userInput.split(this.operator);
      this.result = this.inputArr[0] * this.inputArr[0];

    }
    if (this.operator === "^") {
      console.log(this.operator);

      this.inputArr = this.userInput.split(this.operator);
      console.log(this.inputArr);
      if (!this.inputArr[1]) this.result = null;
      else {
        const num = Math.pow(this.inputArr[0], this.inputArr[1])
        this.result = num;
      }
    }
    if (this.operator === "cos(") {
      console.log(this.operator);
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
    if (this.operator === "tan(") {
      console.log(this.operator);
      const index = this.userInput.toString().indexOf("sin(") + 4;
      console.log(index);
      let sub = eval(this.userInput.slice(index)), num;
      if (this.deg) {
        console.log("deg");
        num = Math.cos(eval(sub) * -57.2958)

      }
      else {
        num = Math.tan(eval(sub))
      }
      this.result = num;

    }
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

    if (this.operator === "log(") {
      this.inputArr = this.userInput.split(this.operator);

      console.log(this.operator);
      // const index = this.userInput.toString().indexOf("√");
      if (!this.inputArr[1]) this.result = null;
      const num = (!this.inputArr[0]) ? Math.log10(this.inputArr[1]) :
        (this.inputArr[0] * Math.log10(this.inputArr[1])
        )
      this.result = num;

    }

    if (this.operator === "ln(") {
      this.inputArr = this.userInput.split(this.operator);
      console.log(this.inputArr)
      const num = (!this.inputArr[0]) ? Math.log(this.inputArr[1]) :
        (this.inputArr[0] * Math.log(this.inputArr[1]))
      this.result = num;
    }

    if (this.operator === "sin-1(") {
      this.inputArr = this.userInput.split(this.operator)
      console.log(this.inputArr)
      if (!this.inputArr[1]) {
        this.result = null;
      }
      const num = Math.asin(this.inputArr[1]);
      this.result = num

    }
    if (this.operator === "cos-1(") {
      this.inputArr = this.userInput.split(this.operator)
      console.log(this.inputArr)
      if (!this.inputArr[1]) {
        this.result = null;
      }
      const num = Math.acos(this.inputArr[1]);
      this.result = num

    }
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
