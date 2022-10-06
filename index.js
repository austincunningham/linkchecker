#!/usr/bin/env node

const yargs = require('yargs');
const BrokenLinksChecker = require('bs-broken-links-checker').BrokenLinksChecker;

yargs.usage('Usage: $0 <command>')
    .command('link', 'Check for broken links', function(yargs){
        yargs
            .alias('u', 'url')
            .alias('m', 'mode')
            .alias('l','log')
            .alias('r', 'requestRetryAmount')
            .default('url', 'https://austincunningham.ddns.net')
            .default('mode', 'section')
    }, checkWebsite)
    .demandCommand()
    .help()
    .argv;

function checkWebsite(argv) {
    console.log(argv.requestRetryAmount)
    brokenLinksChecker = new BrokenLinksChecker({
        url: argv.url, 
        mode: argv.mode,
        logger: {
            level: argv.log
        },
        requestRetriesAmount: argv.requestRetryAmount
    });
    brokenLinksChecker.start(argv.url);
}