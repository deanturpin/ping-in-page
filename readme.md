`ping.html` is a list of IPs within spans. It expects a copy of
jquery in the same directory.

`ping.js` is a jQuery script which extracts the IPs within spans in the
HTML and calls the bash CGI script `ping`.  `ping` must be served by
Apache.
