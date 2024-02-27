const https = require('https');

let request = https.get('https://jsonplaceholder.typicode.com/users?_limit=2', (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('close', () => {
    console.log('Retrieved all data:');
    console.log(JSON.parse(data));
  });
});