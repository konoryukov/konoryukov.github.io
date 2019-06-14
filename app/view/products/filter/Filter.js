Ext.define('TestApp.view.products.filter.Filter', {

    extend: 'Ext.form.Panel',
    xtype: 'products-filter',
    bodyPadding: 15,

    controller: 'products-filter',

    items: [
        {
            xtype: 'form',
            items: [
                {
                    xtype: 'numberfield',
                    fieldLabel: 'ID',
                    name: 'id',
                    width: 500,
                    minValue: 0,
                    allowDecimals: false,
                    listeners: {
                        specialkey: 'onPressSpecialKey'
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Наименование',
                    name: 'name',
                    width: 500,
                    listeners: {
                        specialkey: 'onPressSpecialKey'
                    }
                }
            ]
        }
    ]
});
