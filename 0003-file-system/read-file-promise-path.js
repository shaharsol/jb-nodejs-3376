const fs = require('fs/promises');
const path = require('path');

(async () => {
    // c:\inner-directory\content.txt
    // /app/inner-directory/content.txt
    // const data = await fs.readFile(path.resolve(__dirname, 'inner-directory', 'content.txt'), 'utf8')
    const data = await fs.readFile(path.resolve(`${__dirname}\inner-directory\content.txt`), 'utf8')
    console.log(data);
})();

