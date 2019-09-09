const crypto = require('crypto');
const fs = require('fs');
const request = require('request');
const key = fs.readFileSync("key");
const secret = fs.readFileSync("secret");
const ans = crypto.publicDecrypt(key, secret);
const part1raw = fs.readFileSync("./part1.js");
// console.log('------------------');
// console.log(key.toString());
// console.log('------------------');
// console.log(secret.toString());
// console.log('------------------');
// console.log(ans.toString());
// console.log('------------------');
// console.log(part1raw);
// С помощью полученного вами ключа (key) зашифруйте методом publicEncrypt тот JavaScript-сценарий,
// который вы использовали для расшифровки секрета с заданием. 
// Первыми двумя символами сценария должны быть /* (прямой слэш и звёздочка)
const part2 = crypto.publicEncrypt(key, part1raw);
fs.writeFile("./answer", part2.toString(), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
// Сценарий должен иметь разумный объём, ненамного больше 200 байт

// Ваш ответ – это URL шифровки созданного сценария вида
// https://raw.githubusercontent.com/GossJS/node_starters0/client_server/secret2

const url = "https://raw.githubusercontent.com/quemsah/secret-task/master/answer"

// Обратите внимание: это именно адрес сырого доступа к файлу (бинарному в том числе),
// а не адрес страницы с веб-интерфейсом гитхаба

// Полученный ответ методом POST отправьте на адрес 3336.kodaktor.ru/mystery?yourname
//       с заголовком content-type: multipart/form-data
// где yourname – это написанные латиницей ваши имя и фамилия, разделённые дефисом]

request({
    url: "http://3336.kodaktor.ru/mystery?evgeny-pavlov",
    method: "POST",
    //json: true,   // <--Very important!!!
    headers: {
        "content-type": "multipart/form-data", // <--Very important!!!
    },
    body: url
}, function (err, res, body) {
    if (err) {
        console.log('Error :', err)
        return
    }
    console.log(' Res :', res)
    console.log(' Body :', body)
});

// Ответ должен быть отправлен как чистое тело сообщения POST без параметров – только верный адрес.