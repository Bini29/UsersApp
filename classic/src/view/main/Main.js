/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("UsersApp.view.main.Main", {
  extend: "Ext.container.Container",
  xtype: "app-main",

  controller: "main",
  viewModel: "main",

  layout: {
    type: "hbox",
    align: "top",
    pack: "center",
  },
  items: [
    {
      title: "Список пользователей",
      xtype: "userlist",
      width: 1000,
    },
  ],
});
