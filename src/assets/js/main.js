(function ()
{
    'use strict';

    document.documentElement.className = 'js';

    // Load the hostname as a variable so we can provide targetted scripts.

    var whatDomain = window.location.hostname;

    requirejs.config({
        paths:
        {
            'jquery': 'https://code.jquery.com/jquery-3.3.1.slim.min'
        }
    });

    require(['jquery'], function ($)
    {
        // Load objects as variables.

        var code = $('pre code'),
            sitenavigation = $('.site-navigation'),
            smoothscroll = $('a[href*="#"]:not([href="#"])');

        // Syntax highlighting, via 'Prism'.
        // Applies syntax highlighting to `code` HTML elements.
        // More info - http://prismjs.com.

        if (code.length) {
            // Workaround for Textile limitation (you can't specify a class for inner `code` tags with Textile).
            var language = code.parent().attr('class').split(' ')[0];
            code.addClass(language);

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

    });

})();
