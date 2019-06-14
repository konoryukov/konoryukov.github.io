Ext.define('TestApp.view.login.Login', {

    extend: 'Ext.window.Window',
    xtype: 'login',

    controller: 'login',

    title: 'Авторизация',
    bodyPadding: 15,
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [
            {
                xtype: 'textfield',
                name: 'login',
                fieldLabel: 'Логин',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                inputType: 'password',
                name: 'password',
                fieldLabel: 'Пароль',
                allowBlank: false
            },
            {
                xtype: 'displayfield',
                hideEmptyLabel: false,
                value: 'Введите пароль'
            }
        ],
        buttons: [
            {
                text: 'Войти',
                formBind: true,
                listeners: {
                    click: 'onClickLoginButton'
                }
            }
        ]
    }
});