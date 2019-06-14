Ext.define('TestApp.view.products.dialog.DialogController', {

    extend: 'Ext.app.ViewController',
    alias: 'controller.product-dialog',

    onClickSaveButton: function () {
        const view = this.getView();
        view.saveHanlder();
        view.destroy();
    },

    onClickCancelButton: function () {
        const view = this.getView();
        view.rejectHanlder();
        view.destroy();
    }
});
