export class Token {
  list = [];
  newCode;
  indx;
  constructor(code) {
    this.newCode = code.replace(/\s+/g, "");
  }

  isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  isOperator(value) {
    return /^[+\-*/]$/.test(value);
  }

  isNumberRecur(index, numValue) {
    this.indx = index;
    if (!this.isNumber(this.newCode[index])) {
      this.list.push({
        Type: "Number",
        Value: parseFloat(numValue),
      });
      return;
    }
    if (this.isNumber(this.newCode[index])) {
      numValue = parseFloat(`${numValue}${this.newCode[index]}`);
      this.isNumberRecur(index + 1, numValue);
    } else {
      this.isNumberRecur(index + 1, numValue);
    }
  }

  Tokenize() {
    for (let i = 0; i <= this.newCode.length - 1; i++) {
      if (this.isNumber(this.newCode[i])) {
        this.isNumberRecur(i + 1, this.newCode[i]);
        i = this.indx;
      }
      if (this.isOperator(this.newCode[i])) {
        switch (this.newCode[i]) {
          case "+":
            this.list.push({
              Type: "add",
              Value: this.newCode[i],
            });
            break;
          case "-":
            this.list.push({
              Type: "sub",
              Value: this.newCode[i],
            });
            break;
          case "*":
            this.list.push({
              Type: "mul",
              Value: this.newCode[i],
            });
            break;
          case "/":
            this.list.push({
              Type: "div",
              Value: this.newCode[i],
            });
            break;
          default:
            console.log("Invalid Operator");
        }
      }
    }
    return this.list;
  }
}
