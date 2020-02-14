(function ()
{
    'use strict';

    // If JavaScript enabled, add a class to `<html>` tag.

    document.documentElement.className = 'js';

    // Load objects as variables.

    var code = document.querySelectorAll('pre code'),
        endnote = document.querySelector('.footnotes'),
        navmenu = document.getElementById('site-navigation');

    // Syntax highlighting, via 'Prism'.
    // Applies syntax highlighting to `code` HTML elements.
    // More info - https://prismjs.com.

    if (code.length) {
        var elems = document.querySelectorAll('.language-txp');

        [].forEach.call(elems, function(el) {
            el.classList.add('language-html');
            el.classList.remove('language-txp');
        });

        Prism.highlightAll();
    }

    // Inject a heading into endnotes regions.

    if (endnote) {
        endnote.insertAdjacentHTML('afterbegin', '<h4>Endnotes</h4>');
    }

    // Responsive navigation menu.

    if (navmenu) {
        var navtoggle = document.getElementById('site-navigation-toggle'),
            navlist = document.getElementById('site-navigation-list');

        navtoggle.addEventListener('click', function(e)
        {
            e.preventDefault();
            navtoggle.classList.toggle('site-navigation-toggle-active');
            navmenu.classList.toggle('site-navigation-open');
        });

        navlist.addEventListener('focusin', function()
        {
            navtoggle.classList.add('site-navigation-toggle-active');
            navmenu.classList.add('site-navigation-open');
        });

        navlist.addEventListener('focusout', function()
        {
            navtoggle.classList.remove('site-navigation-toggle-active');
            navmenu.classList.remove('site-navigation-open');
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
