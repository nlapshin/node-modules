// console.log(exports, require, module, __filename, __dirname)
import express from 'express'

console.log(process.argv)

// https://www.npmjs.com/package/commander
// @uirouter/core

import testModule, { name, myFunction as myNewFunction } from './test.js'
import * as test  from './test.js'


const app = express()

console.log(cjs)

// Node.JS. Паттерны проектирования. Mario Casciaro

app.listen(3000, () => console.log('3000 port'))

// 1 способ: использовать *.mjs
// 2 способ: в package.json прописать "type": "module",

/*
{
  default: { name: 'test', myFunction: [Function: myFunction] },
  myFunction: [Function: myFunction],
  name: 'test'
}

*/
//console.log(testModule, name, myNewFunction)
// { name: 'test', myFunction: [Function: myFunction] } test [Function: myFunction]
