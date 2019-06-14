Ext.define('TestApp.view.products.filter.FilterController', {

    extend: 'Ext.app.ViewController',
    alias: 'controller.products-filter',

    onPressSpecialKey: function (f, e) {
        if (e.getKey() == e.ENTER) {
            this.filter();
        }
    }, 

    filter: function () {
        const view = this.getView();
        const grid = view.up('products-tab').down('grid');
        const store = grid.getStore();
        store.clearFilter();
        let { id, name } = view.down('form').getValues();
        id = parseInt(id);
        store.filterBy(
            record => Number.isNaN(id) || id < 0
                ? record.get('name').includes(name) || id < 0
                : record.get('name').includes(name) && parseInt(record.get('id')) === id
        );
    }
});
