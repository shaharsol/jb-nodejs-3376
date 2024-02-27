const fs = require('fs/promises');
const path = require('path');

(async () => {
    const data = await fs.readFile(path.resolve(__dirname, 'inner-directory', 'content.txt'), 'utf8')
    console.log(data);
})();

