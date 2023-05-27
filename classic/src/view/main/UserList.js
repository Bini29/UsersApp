Ext.define("UsersApp.view.main.UserList", {
  extend: "Ext.grid.Panel",
  xtype: "userlist",
  id: "usersGrid",
  store: { type: "users" },

  columns: [
    { text: "ФИО", dataIndex: "fullName" },
    {
      text: "Дата рождения",
      dataIndex: "date",
      flex: 1,
      xtype: "datecolumn",
      format: "Y-m-d",
    },
    { text: "Пол", dataIndex: "gender", flex: 1 },
    {
      text: "Уволен",
      dataIndex: "status",
      flex: 1,
      renderer: (value) => (value ? "Да" : "Нет"),
    },
  ],

  buttons: [
    {
      xtype: "button",
      name: "clickbtn",
      text: "Создать",
      itemId: "createBtn",
      margin: "0 auto",
    },
  ],
  listeners: {
    select: "onItemSelected",
  },
});
