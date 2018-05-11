#!/usr/bin/env node

const createDownloader = require('../index');
const argv = require('./cli');
const downloader = createDownloader(argv);
downloader.download();
