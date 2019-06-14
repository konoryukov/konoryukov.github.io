Ext.define('TestApp.view.login.LoginController', {

    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onClickLoginButton: function () {
        if (this.auth()) {
            localStorage.setItem('logged', true);
            this.getView().destroy();
            Ext.create({
                xtype: 'app-main'
            });
        } else {
            Ext.Msg.alert('Ошибка', 'Неправильный логин или пароль', Ext.emptyFn);
        }
    },

    auth: function () {
        let { login, password } = this.getView().down('form').getValues();
        return login === 'admin' && password === 'padmin';
    }
});