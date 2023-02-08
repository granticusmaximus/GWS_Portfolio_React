export default {
    name: "settings",
    title: "Settings",
    type: "document",
    __experimental_actions: ["update", "publish"],
    fields: [ // fields must be defined, and it must be an array
    {
      name: 'myProject', // field name is required and must be unique
      type: 'string' // field type is required
    }
  ]
  }