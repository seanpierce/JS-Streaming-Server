const md5 = require('crypto').createHash('md5');
let key = 'poopbutt1';
// timestamp of the expiration time in future
let date = new Date()
date.setDate(date.getDate() + 1)
let exp = date.getTime()
let streamId = '/live/stream';
console.log(exp+'-'+md5.update(streamId+'-'+exp+'-'+key).digest('hex'));
