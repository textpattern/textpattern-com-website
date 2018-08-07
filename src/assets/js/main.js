(function ()
{
    'use strict';

    // If JavaScript enabled, add a class to `<html>` tag.

    document.documentElement.className = 'js';

    // Load objects as variables.

    var code = document.querySelectorAll('pre code'),
        navmenu = document.getElementById('site-navigation'),
        starbubble = document.getElementById('starbubble');

    // Syntax highlighting, via 'Prism'.
    // Applies syntax highlighting to `code` HTML elements.
    // More info - http://prismjs.com.

    if (code.length) {
        var elems = document.querySelectorAll('.language-txp');

        [].forEach.call(elems, function(el) {
            el.classList.add('language-html');
            el.classList.remove('language-txp');
        });

        Prism.highlightAll();
    }

    // Responsive navigation menu.

    if (navmenu) {
        var navtoggle = document.getElementById('site-navigation-toggle');

        navtoggle.addEventListener('click', function(e)
        {
            e.preventDefault();
            navtoggle.classList.toggle('site-navigation-toggle-active');
            navmenu.classList.toggle('site-navigation-open');
        });
    }

    // GitHub star count.

    if (starbubble) {
        var githubStars = function (callback) {
        	var xmlhttp = new XMLHttpRequest(),
        		url = ['https://api.github.com/repos/textpattern/textpattern'],
        		useCallback = (typeof(callback) === 'function');

        	function countStars(response) {
        		if (!(response instanceof Array)) {
        			response = [response];
        		}
        		var stars = 0;
        		for (var i in response) {
                    if (response.hasOwnProperty(i)) {
                        stars += parseInt(response[i].stargazers_count);
                    }
                }
        		return stars;
        	}

        	if (useCallback) {
        		xmlhttp.onreadystatechange = function() {
        			if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        				callback(countStars(JSON.parse(xmlhttp.responseText)));
        			}
        		};
        	}

        	xmlhttp.open('GET', url, useCallback);
        	xmlhttp.setRequestHeader('Accept', 'application/vnd.github.v3+json');
        	xmlhttp.send();

        	if (!useCallback) {
        		return countStars(JSON.parse(xmlhttp.responseText));
        	}
        };

        githubStars(function(stars) {
            starbubble.innerHTML = '<a id="starcount" class="count-bubble" rel="external" href="https://github.com/textpattern/textpattern/stargazers" title="Stargazers on GitHub">'+stars+'</a>';
        });
    }

})();
