Ext.define("UsersApp.store.Users", {
  extend: "Ext.data.Store",
  alias: "store.users",
  model: "UsersApp.model.Users",
  itemId: "users",
  storeId: "users",
  autoLoad: true,
  proxy: {
    type: "localstorage",
    id: "userStore",
  },
});
