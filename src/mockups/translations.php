<!DOCTYPE html>
<html lang="en-GB-oxendict">
<head>
    <meta charset="utf-8">
    <title>Textpattern CMS | An open source, flexible, elegant and easy-to-use content management system</title>

<!-- CSS -->
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="prefetch" href="../assets/img/branding/misc/icon-sprite.svg">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700italic">
    <link rel="stylesheet" href="../assets/css/style.@@timestamp.css">

<!-- Prefetch DNS for external JavaScript assets -->
    <link rel="dns-prefetch" href="https://ajax.googleapis.com">
    <link rel="dns-prefetch" href="https://www.google-analytics.com">

    <meta name="robots" content="index, follow, noodp, noydir">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="This is where a blog article extract/description would be.">

<!-- All the favicons, touch icons, etc. -->
    <meta name="theme-color" content="#ffda44">
    <meta name="application-name" content="Textpattern CMS">
    <link rel="icon" sizes="32x32" href="../favicon-32x32.png">
    <link rel="icon" sizes="16x16" href="../favicon-16x16.png">

    <link rel="canonical" href="http://www.designhive.dev/blog-article.html">

<!-- Twitter card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@textpattern">
    <meta name="twitter:title" content="Textpattern CMS">
    <meta name="twitter:description" content="This is where a blog article extract/description would be.">
    <meta name="twitter:image:src" content="http://textpattern.com/assets/img/branding/textpattern/textpattern.svg">
    <meta name="twitter:url" content="http://textpattern.dev/blog-landing.html">
</head>

<body itemscope itemtype="http://schema.org/WebPage">
    <meta itemprop="accessibilityControl" content="fullKeyboardControl">
    <meta itemprop="accessibilityControl" content="fullMouseControl">
    <meta itemprop="accessibilityHazard" content="noFlashingHazard">
    <meta itemprop="accessibilityHazard" content="noMotionSimulationHazard">
    <meta itemprop="accessibilityHazard" content="noSoundHazard">
    <meta itemprop="accessibilityAPI" content="ARIA">

    <div class="wrapper">


<!-- Header -->
        <header class="site-header" itemscope itemtype="http://schema.org/Organization">
            <h1 class="masthead" itemprop="name"><a rel="home" itemprop="url" href="http://textpattern.dev/" title="Go to the Textpattern homepage">Textpattern CMS</a></h1>
            <meta itemprop="logo" content="../assets/img/branding/textpattern/textpattern.svg">

            <div itemscope itemtype="http://schema.org/WebSite">
                <meta itemprop="url" content="http://textpattern.dev/">
                <form class="search-form" role="search" itemprop="potentialAction" itemscope itemtype="http://schema.org/SearchAction">
                    <meta itemprop="target" content="http://textpattern.dev/?q={q}">
                    <input class="form-search-input" name="q" type="search" size="32" placeholder="Search Textpattern.com…" itemprop="query-input">
                </form>
            </div>
        </header>


<!-- Navigation -->
        <div class="nav-container">
            <nav class="site-navigation" aria-label="Site navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
                <ul>
                    <li><a itemprop="url" href="http://textpattern.com/start">Get started</a></li>
                    <li><a itemprop="url" href="http://docs.textpattern.io/">Documentation</a></li>
                    <li><a itemprop="url" href="http://textpattern.com/themes">Themes</a></li>
                    <li><a itemprop="url" href="http://textpattern.org/">Plugins</a></li>
                    <li><a itemprop="url" href="http://forum.textpattern.com/">Forum</a></li>
                    <li><a itemprop="url" href="http://textpattern.com/weblog">Blog</a></li>
                    <li class="active"><a itemprop="url" href="http://textpattern.com/about">About</a></li>
                </ul>
            </nav>
        </div>


<!-- Primary Content -->
        <main aria-label="Main content">
            <div class="container">
                <div class="layout-container">

                    <article class="layout-4col-3span" itemprop="blogPost" itemscope itemtype="http://schema.org/Article">
                        <h1 itemprop="name headline">Language translations</h1>

                        <div class="article-description" itemprop="description">
                            <p>This is where an article extract/description would be, if available. Ne sea soluta voluptatum. Ut nec augue disputationi, unum utamur vis in. Ea menandri persecuti dissentiunt usu, causae equidem.</p>
                        </div><!-- /.article-description -->

                        <div itemprop="articleBody">

<?php
$xml = new SimpleXMLElement('https://api.crowdin.com/api/project/textpattern-cms-textpacks/status?key=xxxxxx&xml', 0, TRUE);
?>
<div class="tabular-data">
<table>
    <colgroup>
        <col class="t30">
        <col class="t15">
        <col>
    </colgroup>
    <thead>
        <tr>
        <th scope="col">Language</th>
        <th scope="col">Code</th>
        <th scope="col">Translation status</th>
        </tr>
    </thead>
    <tbody>

<?php foreach ($xml->language as $languageElement) :?>
    <tr>
      <th scope="row"><?php echo $languageElement->name; ?></th>
      <td><code><?php echo $languageElement->code; ?></code></td>
      <td><progress value="<?php echo $languageElement->translated_progress; ?>" max="100"></progress> <b class="data-progress" data-progress="<?php echo $languageElement->translated_progress; ?>" ><?php echo $languageElement->translated_progress; ?>%</b> <a class="button button-small button-list" rel="external"href="https://crowdin.com/project/textpattern-cms-textpacks/<?php echo $languageElement->code; ?>">Translate</a></td>
    </tr>
<?php endforeach; ?>
  </tbody>
</table>
</div>

                    </article>

                    <section class="layout-4col-alt sidebar">
                        <h3>Sidebar placeholder</h3>
                    </section>

                </div><!-- /.layout-container -->
            </div><!-- /.container -->
        </main>


    </div><!-- /.wrapper -->


<!-- Secondary Content -->
    <aside class="container complementary-content">

        <div class="layout-container">
            <div class="layout-3col-2span">
                <div class="layout-container">
                    <section class="layout-2col" itemscope itemtype="http://schema.org/Organization">
                        <h4>Social channels</h4>
                        <meta itemprop="name" content="Textpattern CMS">
                        <ul class="social-channels">
                            <li><a class="facebook" rel="external" itemprop="url" href="http://textpattern.com/facebook" title="Follow us on Facebook+">Facebook</a></li>
                            <li><a class="twitter" rel="external" itemprop="url" href="http://textpattern.com/@textpattern" title="Follow us on Twitter">Twitter</a></li>
                            <li><a class="googleplus" rel="external" itemprop="url" href="http://textpattern.com/+" title="Follow us on Google+">Google+</a></li>
                            <li><a class="github" rel="external" itemprop="url" href="http://textpattern.com/github" title="Follow us on GitHub">GitHub</a></li>
                        </ul>
                        <h4>Donate</h4>
                        <p>Your kind donations help us keep Textpattern CMS development alive!</p>
                        <p><a class="button button-primary" href="http://textpattern.com/patrons"><span class="ui-icon ui-icon-heart"></span> Donate…</a></p>
                    </section>
                    <section class="layout-2col community-details">
                        <h4>External links</h4>
                        <ul class="community-links">
                            <li><a rel="external" href="https://github.com/textpattern">Textpattern on GitHub</a></li>
                            <li><a rel="external" href="https://github.com/textile">Textile on GitHub</a></li>
                            <li><a rel="external" href="http://txpmag.com/">TXP Magazine</a></li>
                            <li><a rel="external" href="http://textpattern.tips/">Textpattern Tips</a></li>
                            <li><a rel="external" href="http://txplanet.net/">Textpattern Planet</a></li>
                            <li><a rel="external" href="http://textpattern.ru/">Textpattern.ru</a></li>
                            <li><a rel="external" href="http://welovetxp.com/">We love Textpattern</a></li>
                        </ul>
                    </section>
                </div><!-- /.layout-container -->
            </div>

            <section class="layout-3col host-details">
                <h4 class="accessibility">Host details</h4>
                <p><img src="../assets/img/branding/textpattern-network/textpattern-network-white.svg" alt="Textpattern Network"></p>
                <p>
                    <small>
                        Kindly hosted by<br>
                        <a class="joyent" rel="external" href="http://joyent.com/" title="Go to the Joyent website"><img src="../assets/img/branding/misc/joyent-inverse.svg" alt="Joyent"></a>
                    </small>
                </p>
            </section>
        </div><!-- /.layout-container -->

    </aside><!-- /.complementary-content -->


<!-- Footer -->
    <footer class="site-footer" role="contentinfo">
        <p class="legal">
            Copyright 2004–2016 The Textpattern Development Team.
            <a href="http://textpattern.com/contact">Contact us</a>.
            <a href="http://textpattern.com/privacy">Privacy</a>.
            <a href="http://textpattern.com/humans.txt">Colophon</a>.
            Textpattern is both free and open source. <a href="http://textpattern.com/license">GPLv2 license</a>.
        </p>
    </footer>


<!-- JavaScript -->
    <script data-main="../assets/js/main.@@timestamp.js" src="../assets/js/require.@@timestamp.js"></script>
    <noscript>JavaScript is currently disabled in your browser - activate it for the best experience.</noscript>
</body>
</html>
