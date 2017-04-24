(function ()
{
    'use strict';

    document.documentElement.className = 'js';

    // Load the hostname as a variable so we can provide targetted scripts.

    var whatDomain = window.location.hostname;

    requirejs.config({
        paths:
        {
            'jquery': 'https://code.jquery.com/jquery-3.2.1.min',
            'ghbuttons': 'https://buttons.github.io/buttons'
        }
    });

    // Detect whether user enabled 'Do No Track' in their browser, and honour it.

    define('track', function ()
    {
        return {
            allow : navigator.doNotTrack !== 'yes' && navigator.doNotTrack !== '1' && window.doNotTrack !== 'yes' && window.doNotTrack !== '1'
        };
    });

    require(['jquery'], function ($)
    {
        // Load objects as variables.

        var code = $('pre code'),
            ghbutton = $('.github-button'),
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

        // Unofficial GitHub buttons.
        // More info - https://buttons.github.io.

        if (ghbutton.length) {
            require(['ghbuttons']);
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

    // Google Analytics

    require(['track'], function(track)
    {
        if (track.allow) {
            /* jshint ignore:start */
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            /* jshint ignore:end */

            if (whatDomain === 'docs.textpattern.io') {
                ga('create', 'UA-89386022-1', 'auto');
            } else {
                ga('create', 'UA-XXXXX-Y', 'auto'); // TODO: Remember to amend the GA account ID number!
            }

            ga('set', 'anonymizeIp', true);
            ga('send', 'pageview');
        }
    });

})();
