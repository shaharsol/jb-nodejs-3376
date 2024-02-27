const fs = require('fs/promises');

(async () => {
    const data = await fs.readFile('content.txt', 'utf8')
    console.log(data);
})();

