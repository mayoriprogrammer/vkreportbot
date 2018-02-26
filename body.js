var BOT1 = new pBot('тут токен');
//var BOT1 = new pBot('тут токен');
//var BOT1 = new pBot('тут токен');
//var BOT1 = new pBot('тут токен');
//var BOT1 = new pBot('тут токен');
//var BOT1 = new pBot('тут токен');
//var BOT1 = new pBot('тут токен');

//ну ты понял как вставить неск. ботов)

function pBot(token) {
const request = require("request");

var admins = []; //писать онли цифры, без id. Если неск. юзеров, то через запятую. Пример: var admins = [435435, 54646, 435345];
var BOTS_ID = [];

var vk = new ( require('vk-io') );
var fs = require('fs');

vk.setToken(token);
vk.longpoll.start();

var utils = { 
    rand: (x, y) => y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x), 
    randpick: (array) => array[utils.rand(array.length - 1)], 
} 

vk.api.call('users.get')
.then((res) => {
console.log('[Авторизация] Успешно зашел на страницу. Ид: %s', res[0].id);
BOTS_ID.push(res[0].id);
})
console.log('coded by vk.com/mayorihvh'

var random = (x, y) => y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
var rand = (array) => array[random(array.length - 1)];
vk.longpoll.on('message', (message) => {
if(!~admins.indexOf(message.user)) return; //admins
let body = message.text.split(' ');


if(body[0] == '/report') {
return message.send(`Ну ты сука и даун, не /bots_report а надо /bots_reportporno /bots_reportspam /bots_reportinsult /bots_reportadvertisment`);
}

if(body[0] == '/bots_reportspam') {
try{ 
vk.api.call('users.report', { user_id: body[1], type: "spam" });
return message.send(`Репорты были отправлены *id${body[1]} (ему). Причина: spam. | coded by vk.com/legitgroup`);
} catch (err) {
return message.send(`Error`);
}
}

if(body[0] == '/bots_reportporno') {
try{ 
vk.api.call('users.report', { user_id: body[1], type: "porn" });
return message.send(`Репорты были отправлены *id${body[1]} (ему). Причина: porno. | coded by vk.com/legitgroup`);
} catch (err) {
return message.send(`Error`);
}
}

if(body[0] == '/bots_reportinsult') {
try{ 
vk.api.call('users.report', { user_id: body[1], type: "insult" });
return message.send(`Репорты были отправлены *id${body[1]} (ему). Причина: insult. | coded by vk.com/legitgroup`);
} catch (err) {
return message.send(`Error`);
}
}

if(body[0] == '/bots_reportadvertisment') {
try{ 
vk.api.call('users.report', { user_id: body[1], type: "advertisment" });
return message.send(`Репорты были отправлены *id${body[1]} (ему). Причина: advertisment. | coded by vk.com/legitgroup`);
} catch (err) {
return message.send(`Error`);
}
}


if(body[0] == '!test') {
message.send("работаю");
}
})
}

function getRandomInt(min, max){return Math.round(Math.random() * (max - min)) + min};
Array.prototype.random = function(){return this[Math.floor(this.length * Math.random())];}
Array.prototype.find = function (element) {return this.indexOf(element) == -1?false:true}
Array.prototype.return = (count) => slice(0, count)