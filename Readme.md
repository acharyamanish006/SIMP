# Simp (SImple Mathematical Interpreter)
##      SI     M                 P

## ![Screenshot from 2024-06-23 13-08-50](https://github.com/acharyamanish006/SIMP/assets/100832817/94d693ca-b805-4458-9cbf-6e05477301d1)


Overview

**Simp** is a simple mathematical Interpreter written in JavaScript. It supports basic arithmetic operations including addition, subtraction, multiplication, and division. The lexer parses the input expression into tokens, and the parser evaluates the expression respecting the correct order of operations.

## Table of Contents

- [Installation](#installation)
- [Example](#example)

## Installation

To install the `Simp` package, you can use npm:

```bash
npm install @acharyamanish/simp
```

## Example

```bash
import Simp from "@acharyamanish/simp";

const simp = new Simp("10 + 2 * 6 - 25/5");
console.log(simp.run()); // Output: 17
