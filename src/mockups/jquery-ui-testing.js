// This example file is used to demonstrate all available jQuery UI components
// on the design patterns page.

require(['main'], function ()
{
    require(['jquery', 'jqueryui'], function ($)
    {
        // jQuery UI widgets.

        // Button.

        $('.jquery-ui-button').button();

        // Icon button.

        $('.jquery-ui-button-icon-only').button({
            showLabel: false,
            icon: 'ui-icon-gear'
        });

        $('.jquery-ui-button-icon-left').button({
            icon: 'ui-extra-icon-download'
        });

        $('.jquery-ui-button-icon-right').button({
            icon: 'ui-icon-disk',
            iconPosition: 'end'
        });

    });
});
