# LinkChecker

cli for checking dead links in websites

## Basic usage

```bash
npm i -g
# check link -u <url(default https://austincunningham.ddns.net)> -m <website,section(default),page>e.g.
check link -u https://austincunningham.ddns.net
```

### Flags

```bash
# required url you wish to scan
-u --url 
-u <url>
# mode scans section page or website defaults to section if not set
-m --mode
-m <website,section,page>
# requestRetryAmount sets the number of attempts on urls default 5
-r --requestRetryAmount
-r 3
# log level(optional) defaults to info if not set
-l --log
-l <verbose,debug,error,info,warn>
```

