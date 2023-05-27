/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("UsersApp.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  init: function () {
    this.control({
      "#createBtn": {
        click: "createItem",
      },
    });
    // Ext.data.StoreManager.lookup("users").load();
  },

  onItemSelected: function (sender, record) {
    const store = Ext.data.StoreManager.lookup("users");
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
            console.log(win.up("gridpanel"));
            if (form.isValid() && store.getById(itemId)) {
              store.getById(itemId).set(form.getValues());
              store.sync();

              btn.up("window").hide();
              selectionModel.deselectAll();
            }
          },
        },
        {
          text: "Удалить",
          handler: function (btn) {
            store.remove(store.getById(itemId));

            store.sync();
            btn.up("window").hide();
            selectionModel.deselectAll();
          },
        },
      ],
    });

    popUp.show();
  },

  createItem: function () {
    pop = Ext.create("UsersApp.view.main.PopUp", {
      title: "Создать пользователя",
      items: [{ xtype: "AddUserForm" }],
      buttons: [
        {
          text: "Создать",
          handler: function (btn) {
            const win = btn.up("window"),
              form = win.down("form");
            if (form.isValid()) {
              const store = Ext.data.StoreManager.lookup("users");
              store.add(form.getValues());
              store.sync();
              btn.up("window").hide();
            } else {
              Ext.MessageBox.show({
                title: "Предупреждение",
                message: "Это предупреждение.",
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
  removeItem: function () {
    alert("remove");
  },
});
