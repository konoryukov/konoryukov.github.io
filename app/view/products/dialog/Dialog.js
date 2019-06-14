Ext.define('TestApp.view.products.dialog.Dialog', {

    extend: 'Ext.form.Panel',
    xtype: 'product-dialog',
    bodyPadding: 15,
    floating: true,
    centered: true,
    modal: true,

    bind: {
        title: 'Карточка товара: {record.name}'
    },

    controller: 'product-dialog',

    items: [
        {
            xtype: 'displayfield',
            fieldLabel: 'ID',
            name: 'id',
            bind: '{record.id}'
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Наименование',
            name: 'name',
            bind: '{record.name}'
        },
        {
            xtype: 'numberfield',
            name: 'cost',
            width: 500,
            fieldLabel: 'Цена',
            minValue: 0,
            allowBlank: false,
            bind: '{record.cost}'
        },
        {
            xtype: 'numberfield',
            name: 'count',
            width: 500,
            fieldLabel: 'Кол-во',
            allowBlank: false,
            minValue: 0,
            allowDecimals: false,
            bind: '{record.count}'
        }
    ],

    buttons: [
        {
            text: 'Сохранить',
            formBind: true,
            listeners: {
                click: 'onClickSaveButton'
            }
        },
        {
            text: 'Отмена',
            listeners: {
                click: 'onClickCancelButton'
            }
        }
    ]
});
