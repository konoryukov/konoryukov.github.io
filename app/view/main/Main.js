Ext.define('TestApp.view.main.Main', {

    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    controller: 'main',

    ui: 'navigation',

    plugins: 'viewport',

    bodyPadding: 15,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            text: 'Учет товаров',
            flex: 0
        },
        items: [
            {
                xtype: 'button',
                text: 'Товары',
                handler: 'onClickOpenProductsButton'
            },
            {
                xtype: 'button',
                text: 'Выход',
                handler: 'onClickLogoutButton'
            }
        ]
    }
});
