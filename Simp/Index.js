import { Token } from "./Lexer.js";
import { Parser } from "./Parser.js";

export default class Simp {
  code;
  constructor(code) {
    this.code = code;
  }
  run() {
    const lexer = new Token(this.code);
    const output = new Parser(lexer.Tokenize());
    return output.eval();
  }
}
