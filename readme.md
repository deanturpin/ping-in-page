`ping.html` is a list of IPs within spans. It expects a copy of
`jquery-2.2.4.min.js` to be in the same directory.

`ping.js` is a jQuery script which extracts the IPs within spans in the
HTML and calls the bash CGI script `ping`.  `ping` must be served by
Apache.
