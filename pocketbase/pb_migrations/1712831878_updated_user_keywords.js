/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ktv2pk27pwf709k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "90iyyhti",
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
  const collection = dao.findCollectionByNameOrId("ktv2pk27pwf709k")

  // remove
  collection.schema.removeField("90iyyhti")

  return dao.saveCollection(collection)
})
