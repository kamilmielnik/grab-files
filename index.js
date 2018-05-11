const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');
const url = require('url');

module.exports = (options) => {
  const download = () => downloadUrls(readUrlsFromFile(options.source));

  const downloadUrls = (urls, index = 0) => downloadFile(urls[index], index)
    .on('response', (response) => {
      if (response.statusCode >= 400) {
        console.log(`Cannot download file "${urls[index]}" (index: ${index})`);
      }
      if (index + 1 < urls.length) {
        setTimeout(() => downloadUrls(urls, index + 1), options.timeout);
      }
    });

  const downloadFile = (fileUrl, fileIndex) => {
    createDirectoryIfNotExists(options.output);
    const outputFilePath = createNonCollidingOutputFilePath(fileUrl, fileIndex);
    const outputStream = fs.createWriteStream(outputFilePath);
    const protocol = fileUrl.startsWith('https') ? https : http;
    return protocol.get(fileUrl, (response) => response.pipe(outputStream));
  };

  const createNonCollidingOutputFilePath = (fileUrl, fileIndex) => {
    let outputFilePath = createOutputFilePath(fileUrl, fileIndex);
    let index = 0;

    while (fs.existsSync(outputFilePath)) {
      outputFilePath = createOutputFilePath(fileUrl, fileIndex, index);
      ++index;
    }

    return outputFilePath;
  };

  const createOutputFilePath = (fileUrl, fileIndex, suffix = '') => {
    const { pathname } = url.parse(fileUrl);
    const extension = path.extname(pathname);
    const fileName = path.basename(pathname, extension);
    const actualFileName = options.preserve ? fileName : fileIndex;
    const actualSuffix = String(suffix) && `-${suffix}`;
    return `${options.output}/${actualFileName}${actualSuffix}${extension}`;
  };

  return { download, downloadFile, downloadUrls };
};

const readUrlsFromFile = (filepath) => fs
  .readFileSync(filepath, 'utf-8')
  .replace(/\r/g, '')
  .split('\n')
  .filter(Boolean);

const createDirectoryIfNotExists = (directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
};
