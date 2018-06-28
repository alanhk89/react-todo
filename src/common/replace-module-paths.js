const fs = module.require('fs');
const path = module.require('path');

function parseAbsolutePath(originalPath, callingFileName) {
  return originalPath.startsWith('web-main-features')
    ? './node_modules/'
    : path.dirname(callingFileName) + '/';
}

function isReplacedFileExists(originalPath, callingFileName, replacedFileName) {
  const absoluteFilePath = path.resolve(
    parseAbsolutePath(originalPath, callingFileName) + replacedFileName
  );

  return (
    fs.existsSync(absoluteFilePath) ||
    fs.existsSync(absoluteFilePath + '.js') ||
    fs.existsSync(absoluteFilePath + '.json')
  );
}

function isNeedReplace(originalPath) {
  return originalPath.indexOf('__market__') !== -1;
}

function replaceWithSpecificMarket(originalPath) {
  return originalPath.replace('__market__', process.env.MARKET);
}

function replaceMarketToEmpty(originalPath) {
  return originalPath.replace(/\.?__market__\/?/, '');
}

module.exports.default = function(originalPath, callingFileName) {
  if (isNeedReplace(originalPath)) {
    const replacedFileName = replaceWithSpecificMarket(originalPath);
    return isReplacedFileExists(originalPath, callingFileName, replacedFileName)
      ? replacedFileName
      : replaceMarketToEmpty(originalPath);
  }
};
