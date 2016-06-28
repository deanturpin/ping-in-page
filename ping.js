// AJAX complete handler
$(document).ajaxComplete(function(event, request, settings) {

	// Only respond to ping requests
	if (settings.url.match('ping')) {

		// Check result
		var colour = 'red';
		if (request.responseText.search(/[^0]+\ received/) != -1)
			colour = 'lime';

		// Extract the IP from the request
		var ip = settings.url.split('?').pop();

		// Find the span that contains *exactly* the IP
		$('span:contains("' + ip + '")').each(function() {

			var match = /^[0-9\.]{7,}/.exec($(this).text());

			// Set the colour accordingly and clear text decoration
			if (ip == match[0])
				$(this).css('color', colour);
		});
	}
});

// For each span containing an IP, ping it
function ping() {

	$('span').each(function(){

		// Check span contains a valid IP
		var ip = /^[0-9\.]{7,}/.exec($(this).text());

		// If so, ping the IP
		if (ip) {
			$.ajax({
				url: 'http://localhost/cgi-bin/ping?' + ip,
				cache: 'false'
				});
		}
	});
}

$(document).ready(function(){

	// When the document is complete, let's ping!
	ping();

	// And do it repeatedly
	setInterval(function(){
		ping();
	}, 10000);
});
