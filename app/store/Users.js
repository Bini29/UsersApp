Ext.define("namesapp.store.Users", {
  extend: "Ext.data.Store",
  alias: "store.users",
  model: "namesapp.model.Users",
  itemId: "users",
  storeId: "users",
  autoLoad: true,
  proxy: {
    type: "localstorage",
    id: "userStore",
  },
});
