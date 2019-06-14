Ext.define('TestApp.view.main.MainController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onClickOpenProductsButton: function () {
        const tab = TestApp.view.products.tab.Tab.factory();
        const view = this.getView();
        view.add({
            title: 'Товары',
            items: [
                tab
            ]
        });
        view.setActiveTab(TestApp.view.products.tab.Tab.instanceCount - 1);
    },

    onClickLogoutButton: function () {
        TestApp.view.products.tab.Tab.reset();
        localStorage.removeItem('logged');
        this.getView().destroy();
        Ext.create({
            xtype: 'login'
        });
    }
});
