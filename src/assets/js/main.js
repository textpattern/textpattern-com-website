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

    // Dark Mode.

    var imgPrefers = document.querySelectorAll('img.prefers-color-scheme'),
        isDark = window.matchMedia('screen and (prefers-color-scheme: dark)');

    function makeImagesDark()
    {
        for (var i = 0; i < imgPrefers.length; i++) {
            if (imgPrefers[i].getAttribute('data-src-dark')) {
                imgPrefers[i].setAttribute('src', imgPrefers[i].getAttribute('data-src-dark'));
            }

            if (imgPrefers[i].getAttribute('data-srcset-dark')) {
                imgPrefers[i].setAttribute('srcset', imgPrefers[i].getAttribute('data-srcset-dark'));
            }
        }
    }

    function makeImagesLight()
    {
        for (var i = 0; i < imgPrefers.length; i++) {
            if (imgPrefers[i].getAttribute('data-src-light')) {
                imgPrefers[i].setAttribute('src', imgPrefers[i].getAttribute('data-src-light'));
            }

            if (imgPrefers[i].getAttribute('data-srcset-light')) {
                imgPrefers[i].setAttribute('srcset', imgPrefers[i].getAttribute('data-srcset-light'));
            }
        }
    }

    function toggleDarkMode(isDark)
    {
        if (isDark.matches) {
            makeImagesDark();
        } else {
            makeImagesLight();
        }
    }

    toggleDarkMode(isDark);
    isDark.addListener(toggleDarkMode);

})();
