/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14ivepdzv20qdz1")

  // remove
  collection.schema.removeField("4apgzpgq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xlx2h9n4",
    "name": "answers",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("14ivepdzv20qdz1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4apgzpgq",
    "name": "answers",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // remove
  collection.schema.removeField("xlx2h9n4")

  return dao.saveCollection(collection)
})
