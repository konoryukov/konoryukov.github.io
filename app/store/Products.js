Ext.define('TestApp.store.Products', {

    extend: 'Ext.data.Store',

    alias: 'store.products',

    fields: [
        'id', 'name', 'description', 'cost', 'count'
    ],

    data: {
        items: [
            {
                id: '1',
                name: 'Notebook Lenovo',
                description: 'Ноутбук ThinkPad T460',
                cost: '100',
                count: '2'
            },
            {
                id: '2',
                name: 'Keyboard OKLICK',
                description: 'Клавиатура OKLICK 140M',
                cost: '500',
                count: '8'
            },
            {
                id: '3',
                name: 'Network adapter',
                description: 'Сетевой адаптер WiFi D-Link',
                cost: '7',
                count: '0'
            }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
