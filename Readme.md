# Simp (SImple Mathematical Interpreter)
##      SI     M                 P

## Overview

**Simp** is a simple mathematical Interpreter written in JavaScript. It supports basic arithmetic operations including addition, subtraction, multiplication, and division. The lexer parses the input expression into tokens, and the parser evaluates the expression respecting the correct order of operations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
  - [Token Class](#token-class)
  - [Parser Class](#parser-class)
  - [Simp Class](#simp-class)
- [Example](#example)
- [License](#license)

## Installation

To install the `Simp` package, you can use npm:

```bash
npm install @acharyamanish/simp
```

## Example

```bash
import Simp from "@acharyamanish/simp";

const simp = new Simp("10 + 2 * 6 - 3 / 1.5");
console.log(simp.run()); // Output: 21
