import config from 'config';

console.log(config.get<string>('app.name'));
console.log(config.get<string>('app.secret'));
console.log(config.get<number>('app.port'));