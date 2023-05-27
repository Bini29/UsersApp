Ext.define("UsersApp.model.Users", {
  extend: "Ext.data.Model",
  alias: "model.Users",
  idProperty: "_id",

  fields: [
    {
      name: "id",
      type: "int",
    },
    {
      name: "fullName",
      type: "string",
    },
    { name: "date", type: "date", dateFormat: "d/m/Y" },
    {
      name: "gender",
      list: ["М", "Ж"],
    },
    { name: "status", type: "boolean", defaultValue: false },
  ],
});
