(function ()
{
    'use strict';

    requirejs.config({
        paths:
        {
            'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
            'jqueryui': '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min',
            'webfont' : '//ajax.googleapis.com/ajax/libs/webfont/1.4.10/webfont',
            'flowplayer': 'flowplayer/flowplayer.min'
        },
        shim:
        {
            'details': ['jquery'],
            'flowplayer': ['jquery'],
            'cookie': ['jquery'],
            'jqueryui': ['jquery']
        }
    });

    define('modernizr', function ()
    {
        return window.Modernizr;
    });

    require(['jquery'], function ($)
    {
        var details = $('details'), code = $('pre code');

        // Details polyfill.

        if (details.length)
        {
            require(['details'], function ()
            {
                details.details();
                $('html').addClass($.fn.details.support ? 'details' : 'no-details');
            });
        }

        // Syntax highlighting.

        if (code.length)
        {
            code.parent().addClass('prettyprint');

            require(['prettify'], function ()
            {
                prettyPrint();
            });
        }
    });

    // Test for SVG support via Modernizr, if no then replace SVGs with PNGs.

    require(['jquery', 'modernizr'], function ($, Modernizr)
    {
        if (!Modernizr.svg)
        {
            $('img.svg').attr('src', function ()
            {
                return $(this).attr('src').replace('.svg', '.png');
            });
        }
    });

    // Responsive navigation.

    require(['responsivenav'], function ()
    {
        responsiveNav('.nav-collapse', {
            transition: 400,
            insert: 'before'
        });
    });

    // EU-cookie disclaimer.

    require(['jquery', 'cookie'], function ($)
    {
        if (!$.cookie('acceptedCookies'))
        {
            var disclaimer = $('<aside id="cookie-disclaimer"><div class="container"><p><strong>This website uses cookies to enhance your experience.</strong> By continuing to use this website you agree to cookies being placed on your computer. If you wish to use this website but do not wish for cookies to be placed on your computer you can change the settings in your internet browser. <a href="#" data-action="close">Close</a>.</p></div></aside>');
            $('body').prepend(disclaimer);
            $.cookie('acceptedCookies', 1, {expires: 1461});

            disclaimer.find('a').on('click', function (e)
            {
                e.preventDefault();

                disclaimer.slideUp('fast', function ()
                {
                    disclaimer.remove();
                });
            });
        }
    });

    // Flowplayer.

    require(['jquery'], function ($)
    {
        var player = $('.videoplayer');

        if (player.length)
        {
            require(['flowplayer'], function ()
            {
                player.flowplayer({
                    splash: true,
                    ratio: 0.417
                });
            });
        }
    });

    // Fonts.

    require(['webfont'], function ()
    {
        WebFont.load({
            google:
            {
                families: ['PT+Serif:400,700,400italic,700italic:latin']
            }
        });
    });

    // Google+ '+1' button.

    require(['jquery'], function ($)
    {
        if ($('.g-plusone').length)
        {
            require(['//apis.google.com/js/plusone.js']);
        }
    });

    // Twitter 'Tweet' button.

    require(['jquery'], function ($)
    {
        if ($('.twitter-share-button').length)
        {
            require(['//platform.twitter.com/widgets.js']);
        }
    });

    // Analytics.

    window._gaq = window._gaq || [];
    window._gaq.push(['_setAccount', 'UA-xxxxxxxx-x']);
    window._gaq.push(['_setDomainName', 'none']);
    window._gaq.push(['_gat._anonymizeIp']);
    window._gaq.push(['_trackPageview']);
    require(['//www.google-analytics.com/ga.js']);

})();
