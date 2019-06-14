Ext.define('TestApp.view.products.tab.Tab', {

    extend: 'Ext.panel.Panel',
    xtype: 'products-tab',

    statics: {
        factory: () => Ext.create('TestApp.view.products.tab.Tab'),
        reset: function () {
            this.instanceCount = 0;
        },
        instanceCount: 0,
    },

    constructor: function () {
        this.callParent();
        this.self.instanceCount++;
    },

    controller: 'products-tab',

    title: 'Список товаров',

    items: [
        {
            xtype: 'products-filter'
        },
        {
            xtype: 'products-grid',
        }
    ]
});
