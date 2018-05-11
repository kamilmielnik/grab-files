const yargs = require('yargs');

const { argv } = yargs
  .usage('$0 --input=[string] --output=[string] --timeout=[number] --preserve=[boolean]')
  .option('input', {
    alias: 'i',
    demandOption: false,
    default: 'urls.txt',
    describe: 'input file with new-line separated urls',
    type: 'string'
  })
  .option('output', {
    alias: 'o',
    demandOption: false,
    default: 'download',
    describe: 'output directory',
    type: 'string'
  })
  .option('timeout', {
    alias: 't',
    demandOption: false,
    default: 200,
    describe: 'time between subsequent requests in milliseconds',
    type: 'number'
  })
  .option('preserve', {
    alias: 'p',
    demandOption: false,
    default: true,
    describe: 'preserve original file names',
    type: 'boolean'
  })
  .alias('v', 'version')
  .version()
  .help();

module.exports = argv;
