(function ()
{
    'use strict';

    document.documentElement.className = 'js';

    // Load the hostname as a variable so we can provide targetted scripts.

    var whatDomain = window.location.hostname;

    requirejs.config({
        paths:
        {
            'jquery': 'https://code.jquery.com/jquery-3.2.1.min'
        }
    });

    require(['jquery'], function ($)
    {
        // Load objects as variables.

        var code = $('pre code'),
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

        // Smooth scroll to anchors within same page.

        smoothscroll.click(function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 500);

                    return false;
                }
            }
        });
    });

    // Responsive navigation menu, via 'Responsive Nav'.
    // More info - https://github.com/viljamis/responsive-nav.js.

    require(['responsivenav.@@timestamp'], function ()
    {
        responsiveNav('.site-navigation', {
            transition: 400,
            insert: 'before',
            navClass: 'site-navigation'
        });
    });

    // Google Analytics, via 'ga-lite'.
    // More info - https://github.com/jehna/ga-lite.

    require(['galite.@@timestamp'], function()
    {
        var galite = galite || {};

        if (whatDomain === 'docs.textpattern.io') {
            galite.UA = 'UA-89386022-1';
        } else {
            galite.UA = 'UA-XXXXXXXX-X'; // TODO: Remember to amend the GA account ID number!
        }

        galite.anonymizeIp = true;
    });

})();
