/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14ivepdzv20qdz1")

  // remove
  collection.schema.removeField("gbjayquq")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14ivepdzv20qdz1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gbjayquq",
    "name": "test",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
})
