<?php

`mkdir -pv tmp`;
chdir('tmp');

echo "Downloading Textpattern master from GitHub...\n";
`rm -Rf textpattern`;
`git clone --depth 1 https://github.com/textpattern/textpattern`;
echo "Cleaning up the downloaded package...\n";

chdir('textpattern');

`rm -Rf .git`;

foreach (array_merge((array) glob('*'), array('.gitignore')) as $file)
{
    if (!in_array($file, array('textpattern', 'index.php')))
    {
        echo "Remove {$file}...\n";
        `rm -Rf '{$file}'`;
    }
}

chdir('../../');

// Keep existing .htaccess file.

if (file_exists('public/.htaccess'))
{
    echo "Keep existing .htaccess...\n";
    copy('public/.htaccess', 'tmp/textpattern/.htaccess');
}

// Keep existing configuration.

if (file_exists('public/textpattern/config.php'))
{
    echo "Keep existing config.php...\n";
    copy('public/textpattern/config.php', 'tmp/textpattern/textpattern/config.php');
    echo "Remove setup/...\n";
    `rm -Rf 'tmp/textpattern/textpattern/setup'`;
}

// Keep existing additional themes.

if (is_dir('public/textpattern/theme') && chdir('public/textpattern/theme'))
{
    foreach ((array) glob('*') as $file)
    {
        if (!in_array($file, array('classic', 'hive', 'remora', '.htaccess')))
        {
            `cp -rf '{$file}/' ../../../tmp/textpattern/textpattern/theme/`;
        }
    }

    chdir('../../../');
}

echo "Moving in the new installation...\n";
`rm -Rf public/textpattern`;
`rm -f public/index.php`;
`cp -rf tmp/textpattern/ public/`;
`mkdir -p -m 755 public/files`;
`mkdir -p -m 755 public/img-cms`;
`mkdir -p -m 755 cache`;
`chmod 755 public/textpattern/tmp`;

echo "Removing trash...\n";
`rm -Rf tmp`;
