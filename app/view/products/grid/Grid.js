Ext.define('TestApp.view.products.grid.Grid', {

    extend: 'Ext.grid.Panel',
    xtype: 'products-grid',

    store: {
        type: 'products',
        id: 'products',
        autoLoad: true,
    },

    columns: [
        {
            text: 'ID',
            dataIndex: 'id',
            flex: 1
        },
        {
            text: 'Имя',
            dataIndex: 'name',
            flex: 1
        },
        {
            text: 'Описание',
            dataIndex: 'description',
            flex: 1
        },
        {
            text: 'Цена',
            dataIndex: 'cost',
            flex: 1
        },
        {
            text: 'Кол-во',
            dataIndex: 'count',
            flex: 1,
            renderer: function (value, meta) {
                if (parseInt(value) === 0) {
                    meta.style = "background-color:red;";
                }
                return value;
            }
        }
    ],

    listeners: {
        itemclick: function (view, record) {
            Ext.create('TestApp.view.products.dialog.Dialog', {
                viewModel: {
                    data: {
                        record
                    }
                },
                rejectHanlder: () => this.getStore().rejectChanges(),
                saveHanlder: () => {
                    const store = this.getStore();
                    if (store.getUpdatedRecords().length) {
                        store.commitChanges();
                        Ext.Msg.alert('Информация', 'Изменения были сохранены!');
                    }
                    this.up('app-main').items.items.forEach(tab => {
                        tab.down('grid').getView().refresh();
                    });
                }
            }).show();
        }
    }
});
