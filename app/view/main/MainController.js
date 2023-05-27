/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("UsersApp.view.main.MainController", {
  extend: "Ext.app.ViewController",
  alias: "controller.main",
  store: Ext.data.StoreManager.lookup("users"),

  init: function () {
    this.control({
      "#createBtn": {
        click: "createItem",
      },
    });
  },

  onItemSelected: function (sender, record) {
    const store = sender.store;
    const itemId = record.getData().id;
    const grid = this.getView().down("gridpanel");
    const selectionModel = grid.getSelectionModel();

    const popUp = Ext.create("UsersApp.view.main.PopUp", {
      title: "Редактировать пользователя",
      items: [{ xtype: "AddUserForm" }],
      data: record.data,
      buttons: [
        {
          text: "Обновить",
          handler: function (btn) {
            const win = btn.up("window"),
              form = win.down("form");

            if (form.isValid() && store.getById(itemId)) {
              store.getById(itemId).set(form.getValues());
              store.sync();

              btn.up("window").close();
              selectionModel.deselectAll();
            }
          },
        },
        {
          text: "Удалить",
          handler: function (btn) {
            store.remove(store.getById(itemId));
            store.sync();

            btn.up("window").close();
            selectionModel.deselectAll();
          },
        },
      ],
    });

    popUp.show();
  },

  createItem: function () {
    const store = this.getView().down("gridpanel").getStore();

    const pop = Ext.create("UsersApp.view.main.PopUp", {
      title: "Создать пользователя",
      items: [{ xtype: "AddUserForm" }],
      buttons: [
        {
          text: "Создать",
          handler: function (btn) {
            const win = btn.up("window"),
              form = win.down("form");

            if (form.isValid()) {
              store.add(form.getValues());
              store.sync();

              btn.up("window").close();
            } else {
              Ext.MessageBox.show({
                title: "Предупреждение",
                message: "Заполниет все поля",
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.WARNING,
              });
            }
          },
        },
      ],
    });
    pop.show();
  },
});
