/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wh8m267h58nxumt")

  // remove
  collection.schema.removeField("axfybjdq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zk5ls1mf",
    "name": "user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wh8m267h58nxumt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "axfybjdq",
    "name": "user",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("zk5ls1mf")

  return dao.saveCollection(collection)
})
