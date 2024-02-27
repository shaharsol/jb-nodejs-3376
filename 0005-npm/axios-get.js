const axios = require('axios');

(async () => {
  const response = await axios('https://jsonplaceholder.typicode.com/users?_limit=2');
  console.log(response.data);
})();



