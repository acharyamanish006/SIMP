export class Parser {
  token;
  len;
  constructor(token) {
    this.token = token;
    if(this.token[0].Type != "Number" || this.token[token.length-1].Type != "Number" ){
      throw new Error("Invalid input",this.token[0].Type);
    }
  }
  checkDiv(){
    for (let i = 0; i < this.token.length; i++) {
      if (this.token[i].Type == "div") {
        let div = this.token[i-1].Value / this.token[i+1].Value
        this.token[i].Type = "Number"
        this.token[i].Value = div      
        this.token = this.token.filter(val => val != this.token[i + 1]) ;
        this.token = this.token.filter(val => val != this.token[i - 1]) ;
        }
    } 
  }
  checkMul(){
    for (let i = 0; i < this.token.length; i++) {
      if (this.token[i].Type == "mul") {
        let mul = this.token[i-1].Value * this.token[i+1].Value
        this.token[i].Type = "Number"
        this.token[i].Value = mul      
        this.token = this.token.filter(val => val != this.token[i + 1]) ;
        this.token = this.token.filter(val => val != this.token[i - 1]) ;
        }
    }    

  }
  checkSub(){
    for (let i = 0; i < this.token.length; i++) {
      if (this.token[i].Type == "sub") {
        let sub = this.token[i-1].Value - this.token[i+1].Value
        this.token[i].Type = "Number"
        this.token[i].Value = sub      
        this.token = this.token.filter(val => val != this.token[i + 1]) ;
        this.token = this.token.filter(val => val != this.token[i - 1]) ;
        }
    } 
  }
  checkAdd(){
    for (let i = 0; i < this.token.length; i++) {
      if (this.token[i].Type == "add") {
        let add = this.token[i-1].Value + this.token[i+1].Value
        this.token[i].Type = "Number"
        this.token[i].Value = add      
        this.token = this.token.filter(val => val != this.token[i + 1]) ;
        this.token = this.token.filter(val => val != this.token[i - 1]) ;
        }
    } 
  }

  checkOrder() {
    this.checkDiv()
    this.checkMul()
    this.checkSub()
    this.checkAdd()
  }

  eval() {
    this.checkOrder();
    if(this.token.length == 1 && this.token[0].Type == "Number"){
    return this.token[0].Value
    }
    else{
      throw console.error("Unexpected Err");
    }
  }
}
