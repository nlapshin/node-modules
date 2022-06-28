console.log(exports, require, module, __filename, __dirname)

require('./test')
require('./test-slow')

const express = require('express')
const app = express()

app.listen(3000, () => console.log('Server started on 3000 port'))
