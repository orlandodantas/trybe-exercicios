const fs = require('fs').promises;

const writeFile = async (fileName, content) => {
  try {
    await fs.appendFile(fileName, content, 'utf-8');

    return 'ok';
  } catch (error) {
    return error;
  }
};

module.exports = { writeFile };
