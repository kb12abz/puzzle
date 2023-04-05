const { readdir, stat } = require('fs/promises');
const { join } = require('path');

const getFileSizes = async (dir) => {
  const files = await readdir(dir, { withFileTypes: true });

  const paths = files.map(async file => {
    const path = join(dir, file.name);

    if (file.isDirectory()) return await getFileSizes(path);

    if (file.isFile()) {
      const { size } = await stat(path);
      return { dir: path.split('/').reverse()[1], size };
    }
    return 0;
  });
  return (await Promise.all(paths)).flat(Infinity)
}

(async () => {
  const filesList = await getFileSizes('./content');
  const directoryFileCount = {}

  filesList.forEach(file => {
    if (directoryFileCount[file.dir]) {
      directoryFileCount[file.dir] = directoryFileCount[file.dir] + file.size
    } else {
      directoryFileCount[file.dir] = file.size
    }
  })

  let totalCount = 0
  const keys = Object.keys(directoryFileCount).filter((key) => {
    if (directoryFileCount[key] <= 100000) {
      totalCount += directoryFileCount[key]
      return directoryFileCount[key]
    }

  });
  console.log(`Identified Directories \n ${keys.join(', ')} \n`);
  console.log(`Amount of directories <= 100000 = ${keys.length}`)
  console.log(`Total count of directories no larger than 100000 : ${totalCount}`)
})();


