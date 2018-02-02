let uglify = require('uglify-es');
let fs = require('fs');

let source = fs.readFileSync('source.js', 'utf8');
let result = uglify.minify(source);
fs.writeFileSync('output.js', result.code);

console.log('Program 1:');
require('./source.js');
console.log('Program 2:');
require('./output.js');
