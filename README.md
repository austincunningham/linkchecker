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
# required 
-u --url 
-u <url>
# defaults to section if not set
-m --mode
-m <website,section,page>
# optional log level defaults to info if not set
-l --log
-l <verbose,debug,error,info,warn>
```

