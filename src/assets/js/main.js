(function ()
{
    'use strict';

    document.documentElement.className = 'js';

    // Load the hostname as a variable so we can provide targetted scripts.

    var whatDomain = window.location.hostname;

    // Load objects as variables.

    var code = document.querySelectorAll('pre code'),
        sitenavigation = document.getElementsByClassName('site-navigation');

    // Syntax highlighting, via 'Prism'.
    // Applies syntax highlighting to `code` HTML elements.
    // More info - http://prismjs.com.

    if (code.length) {
        require(['prism.@@timestamp'], function ()
        {
            Prism.highlightAll();
        });
    }

    // Responsive navigation menu, via 'Responsive Nav'.
    // More info - https://github.com/viljamis/responsive-nav.js.

    if (sitenavigation.length) {
        require(['responsivenav.@@timestamp'], function ()
        {
            responsiveNav('.site-navigation', {
                transition: 400,
                insert: 'before',
                navClass: 'site-navigation'
            });
        });
    }

})();
