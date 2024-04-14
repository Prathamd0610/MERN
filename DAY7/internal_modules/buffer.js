const b = new Buffer.from('ABCdef');
console.log(b.toString());
b.write('other');
console.log(b.toString());