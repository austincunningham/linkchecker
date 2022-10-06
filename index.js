const yargs = require('yargs');
const BrokenLinksChecker = require('bs-broken-links-checker').BrokenLinksChecker;

yargs.usage('Usage: $0 <command>')
    .command('checklinks', 'Check for broken links', function(yargs){
        yargs
            .alias('u', 'url')
            //.default('url', 'https://access.redhat.com/documentation/en-us/red_hat_openshift_api_management/1')
    }, checkWebsite)
    .demandCommand()
    .help()
    .argv;

function checkWebsite(argv) {
    brokenLinksChecker = new BrokenLinksChecker();
    brokenLinksChecker.start(argv.url);
}