Ext.define("UsersApp.view.main.AddUserForm", {
  extend: "Ext.form.Panel",
  xtype: "AddUserForm",
  defaultType: "textfield",
  margin: "10 5 5 5",
  height: 200,
  store: { type: "users" },

  initComponent: function () {
    if (this.up("window").config.data) {
      this.items = [
        {
          fieldLabel: "ФИО",
          name: "fullName",
          allowBlank: false,
          value: this.up("window").config.data.fullName,
          msgTarget: "side",
        },
        {
          fieldLabel: "Дата рождения",
          name: "date",
          xtype: "datefield",
          value: this.up("window").config.data.date,
          allowBlank: false,
          msgTarget: "side",
        },
        {
          xtype: "radiogroup",
          fieldLabel: "Пол",
          value: this.up("window").config.data,
          allowBlank: false,
          msgTarget: "side",
          items: [
            {
              boxLabel: "Мужской",
              name: "gender",
              inputValue: "М",
            },
            {
              boxLabel: "Женский",
              name: "gender",
              inputValue: "Ж",
            },
          ],
        },

        {
          fieldLabel: "Статус сотрудника",
          name: "status",
          xtype: "checkbox",
          checked: this.up("window").config.data.status,
          inputValue: true,
          uncheckedValue: false,
          boxLabel: "Уволен",
        },
      ];
    } else {
      this.items = [
        {
          fieldLabel: "ФИО",
          name: "fullName",
          allowBlank: false,
          msgTarget: "side",
        },
        {
          fieldLabel: "Дата рождения",
          name: "date",
          xtype: "datefield",
          allowBlank: false,
          msgTarget: "side",
        },
        {
          xtype: "radiogroup",
          fieldLabel: "Пол",
          allowBlank: false,
          msgTarget: "side",
          items: [
            {
              boxLabel: "Мужской",
              name: "gender",
              inputValue: "М",
            },
            {
              boxLabel: "Женский",
              name: "gender",
              inputValue: "Ж",
            },
          ],
        },

        {
          fieldLabel: "Статус сотрудника",
          name: "status",
          xtype: "checkbox",
          checked: false,
          inputValue: true,
          uncheckedValue: false,
          boxLabel: "Уволен",
        },
      ];
    }

    // this.items = fields;

    this.callParent(arguments);
  },
});
