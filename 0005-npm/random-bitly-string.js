const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

let ret = '';
for(i=0; i < 5; i++) {
    const rand = Math.round(Math.random() * letters.length);
    ret += letters[rand];
}
console.log(ret);


