/* Павлов Евгений
const crypto = require('crypto');
const fs = require('fs');
const ans = crypto.publicDecrypt(fs.readFileSync("key"), fs.readFileSync("secret"));
