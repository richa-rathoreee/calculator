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
    if (this.userInput.length > 15) {
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
    if (this.userInput == "" && (oprate === "+" || oprate === "%" || oprate === "*" ||
      oprate === "-" || oprate === "/")) {
      return;
    }
    let lastKey = this.userInput[this.userInput.length - 1]
    console.log(lastKey)
    //operand dont repeat
    // if (lastKey === '/' || lastKey === '*' ||
    //   lastKey === '-' || lastKey === '+' || lastKey === '%'
    //   || lastKey === "!" || lastKey === "π" || lastKey === "e") {
    //   return;
    // }
    this.userInput += oprate;
    console.log(this.userInput)
    this.operator = oprate;
    this.getAnswer();
  }

  // get the result of expression
  getAnswer() {
    // console.log(this.userInput);

    // for +,-,*,/ operation
    if (this.operator === "+" ||
      this.operator === "-" ||
      this.operator === "/" ||
      this.operator === "*") {
      if (this.userInput.startsWith("(") || this.userInput.endsWith(")")) {
        let start = this.userInput.slice(1)
        console.log(start)
        console.log(this.userInput.indexOf(")") + 1);
        this.result = eval(start)
      }
      else {
        this.result = eval(this.userInput);
      }

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
      console.log(index)
      let sub1 = this.userInput.slice(0, index)
      sub1 = eval(sub1)
      let num = sub1, fact = 1;
      for (let i = num; i > 0; i--) {
        if (num === 0 || num === 1) {
          fact = 1
        }
        else { fact *= i; }
      }
      console.log(this.userInput[index + 2])
      this.userInput = fact + (+(this.userInput[index + 1]) ? "*" : '')
        + this.userInput.slice(index + 1);
      console.log(index + 2)
      this.result = (num < 0) ? "no such factorial" : eval(this.userInput)
    }

    //for pi
    if (this.operator === "π") {
      let index = this.userInput.indexOf("π");
      let sub1 = this.userInput.slice(0, index)
      sub1 = eval(sub1);
      if (this.userInput === "π") {
        this.result = 3.142857
      }
      if (!sub1) {
        this.userInput = " 3.142857" +
          (+(this.userInput[index + 1]) ? "*" : '') + this.userInput.slice(index + 2);
        this.result = eval(this.userInput);
      }
      else if (sub1) {

        this.userInput = sub1 + "*" + "22" + "/" + "7" +
          (+(this.userInput[index + 1]) ? "*" : '') + this.userInput.slice(index + 2);
        this.result = eval(this.userInput);
      }
    }
    // for e btn 
    if (this.operator === "e") {
      let index = this.userInput.indexOf("e");
      let sub1 = this.userInput.slice(0, index);
      sub1 = eval(sub1);
      if (this.userInput === "e") {
        this.result = 2.7182818285;

      }
      if (!sub1) {
        this.userInput = "2.7182818285" +
          (+(this.userInput[index + 2]) ? "*" : '')
          + this.userInput.slice(index + 2);
        this.result = eval(this.userInput);
      }
      else if (sub1) {
        this.userInput = sub1 + "*" + "2.7182818285" +
          (+(this.userInput[index + 2]) ? "*" : '')
          + this.userInput.slice(index + 2);
        this.result = eval(this.userInput);
      }
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
      let cube = sub1 * sub1 * sub1
      this.userInput = cube + (+(this.userInput[index + 2]) ? "*" : '') +
        this.userInput.slice(index + 2);
      console.log(this.userInput)
      this.result = eval(this.userInput)

    }

    //for ^ power

    if (this.operator === "^") {
      console.log(this.userInput)
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

      this.inputArr = this.userInput.split(this.operator);
      console.log(this.inputArr);
      const num = Math.pow(2, this.inputArr[1])
      // this.userInput=sub1+(+(this.userInput[index -2]) ? "*" : '')+num
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
    if (this.operator === "∛(") {
      let index = this.userInput.indexOf("∛(") + 1
      console.log(index)
      console.log((eval(this.userInput.slice(index + 1))))
      let sub = eval(this.userInput.slice(index + 1)), num;
      num = Math.cbrt(sub)
      this.result = num
    }

    // cosine
    if (this.operator === "cos(") {
      console.log(this.userInput)
      const index = this.userInput.toString().indexOf("cos(") + 4;
      let sub1 = this.userInput.slice(0, index - 4);
      // sub1 = eval(sub1);
      let sub = this.userInput.slice(index);
      sub = this.deg ? Math.cos(eval(sub) * (Math.PI / 180)) : Math.cos(eval(sub));
      console.log(this.userInput[index - 5])

      if (!sub1) {
        let userInput = sub;
        this.result = eval(userInput)
        if (this.userInput == "sin(") {
          this.result = null
        }
      }
      else {

        let userInput = sub1 + (+(this.userInput[index - 5]) ? '*' : '') + sub;
        this.result = eval(userInput)
        console.log(this.userInput);
      }
    }
    //sin 
    if (this.operator === "sin(") {
      console.log(this.userInput)
      const index = this.userInput.toString().indexOf("sin(") + 4;
      let sub1 = this.userInput.slice(0, index - 4);

      let sub = this.userInput.slice(index);
      sub = this.deg ? Math.sin(eval(sub) * (Math.PI / 180)) : Math.sin(eval(sub));

      if (!sub1) {
        let userInput = sub;
        this.result = eval(userInput)
        if (this.userInput == "sin(") {
          this.result = null
        }
      }
      else {

        let userInput = sub1 + (+(this.userInput[index - 5]) ? '*' : '') + sub;
        this.result = eval(userInput)
        console.log(this.userInput);
      }
    }
    //tan    
    if (this.operator === "tan(") {
      console.log(this.userInput)
      const index = this.userInput.toString().indexOf("tan(") + 4;
      let sub1 = this.userInput.slice(0, index - 4);
      let sub = this.userInput.slice(index);
      sub = this.deg ? Math.tan(eval(sub) * (Math.PI / 180)) : Math.tan(eval(sub));

      if (!sub1) {
        let userInput = sub;
        this.result = eval(userInput)
        if (this.userInput == "tan(") {
          this.result = null
        }
      }
      else {
        let userInput = sub1 + (+(this.userInput[index - 5]) ? '*' : '') + sub;
        this.result = eval(userInput)
        console.log(this.userInput);
      }

    }
    //sin inverse
    if (this.operator === "sin-1(") {
      console.log(this.userInput)
      const index = this.userInput.toString().indexOf("sin-1(") + 6;
      let sub1 = this.userInput.slice(0, index - 6);
      let sub = this.userInput.slice(index);
      sub = this.deg ? Math.asin(eval(sub) * (Math.PI / 180)) : Math.asin(eval(sub));

      if (!sub1) {
        let userInput = sub;
        this.result = eval(userInput)
        if (this.userInput == "tan(") {
          this.result = null
        }
      }
      else {
        let userInput = sub1 + (+(this.userInput[index - 7]) ? '*' : '') + sub;
        this.result = eval(userInput)
        console.log(this.userInput);
      }
    }
    // cos inverse    
    if (this.operator === "cos-1(") {
      console.log(this.userInput)
      const index = this.userInput.toString().indexOf("cos-1(") + 6;
      let sub1 = this.userInput.slice(0, index - 6);
      let sub = this.userInput.slice(index);
      sub = this.deg ? Math.acos(eval(sub) * (Math.PI / 180)) : Math.acos(eval(sub));

      if (!sub1) {
        let userInput = sub;
        this.result = eval(userInput)
        if (this.userInput == "tan(") {
          this.result = null
        }
      }
      else {
        let userInput = sub1 + (+(this.userInput[index - 7]) ? '*' : '') + sub;
        this.result = eval(userInput)
        console.log(this.userInput);
      }

    }
    //tan inverse    
    if (this.operator === "tan-1(") {
      console.log(this.userInput)
      const index = this.userInput.toString().indexOf("tan-1(") + 6;
      let sub1 = this.userInput.slice(0, index - 6);
      let sub = this.userInput.slice(index);
      sub = this.deg ? Math.atan(eval(sub) * (Math.PI / 180)) : Math.atan(eval(sub));

      if (!sub1) {
        let userInput = sub;
        this.result = eval(userInput)
        if (this.userInput == "tan(") {
          this.result = null
        }
      }
      else {
        let userInput = sub1 + (+(this.userInput[index - 7]) ? '*' : '') + sub;
        this.result = eval(userInput)
        console.log(this.userInput);
      }

    }
    //square root    
    if (this.operator === "√(") {
      let index = this.userInput.indexOf("√(") + 1;
      console.log(index)
      let sub1 = this.userInput.slice(0, index - 1)
      console.log(sub1)
      let sub = this.userInput.slice(index + 1);
      sub = Math.sqrt(eval(sub));
      console.log(sub)
      let userInput = sub1 + (+(this.userInput[index - 2]) ? '*' : '') + sub;
      console.log(userInput)
      this.result = eval(userInput);

    }

    //log 10
    if (this.operator === "log(") {
      let index = this.userInput.indexOf("log(") + 3;
      console.log(index)
      let sub1 = this.userInput.slice(0, index - 3)
      console.log(sub1)
      let sub = this.userInput.slice(index + 1);
      sub = Math.log10(eval(sub));
      console.log(sub)
      let userInput = sub1 + (+(this.userInput[index - 4]) ? '*' : '') + sub;
      console.log(userInput)
      this.result = eval(userInput)

    }
    //loge
    if (this.operator === "ln(") {
      let index = this.userInput.indexOf("ln(") + 2;
      console.log(index)
      let sub1 = this.userInput.slice(0, index - 2)
      console.log(sub1)
      let sub = this.userInput.slice(index + 1);
      sub = Math.log(eval(sub));
      console.log(sub)
      let userInput = sub1 + (+(this.userInput[index - 3]) ? '*' : '') + sub;
      console.log(userInput)
      this.result = eval(userInput)
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


























