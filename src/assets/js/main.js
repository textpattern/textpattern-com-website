(function ()
{
    'use strict';

    // If JavaScript enabled, add a class to `<html>` tag.

    document.documentElement.className = 'js';

    // Load objects as variables.

    var code = document.querySelectorAll('pre code'),
        navmenu = document.getElementById('site-navigation');

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

})();
