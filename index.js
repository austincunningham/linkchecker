#!/usr/bin/env node

const yargs = require('yargs');
const BrokenLinksChecker = require('bs-broken-links-checker').BrokenLinksChecker;

yargs.usage('Usage: $0 <command>')
    .command('link', 'Check for broken links', function(yargs){
        yargs
            .alias('u', 'url')
            .alias('m', 'mode')
            .alias('l','log')
            .default('url', 'https://austincunningham.ddns.net')
            .default('mode', 'section')
    }, checkWebsite)
    .demandCommand()
    .help()
    .argv;

function checkWebsite(argv) {
    brokenLinksChecker = new BrokenLinksChecker({
        url: argv.url, 
        mode: argv.mode,
        logger: {
            level: argv.log
        }
    });
    brokenLinksChecker.start(argv.url);
}