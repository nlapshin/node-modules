const count = 1000000000
let sum = 0;

console.time('tester')
for (let i = 0; i < count; i++) {
  sum += 0
}

console.timeEnd('tester')

module.exports = { sum }
