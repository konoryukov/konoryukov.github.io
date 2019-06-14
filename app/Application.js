Ext.define('TestApp.Application', {

    extend: 'Ext.app.Application',

    name: 'TestApp',

    launch: function () {
        const logged = localStorage.getItem('logged');
        Ext.create({
            xtype: logged ? 'app-main' : 'login'
        });
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});