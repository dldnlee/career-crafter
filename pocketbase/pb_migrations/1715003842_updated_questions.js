/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fvym46tfw9ngpnu")

  // remove
  collection.schema.removeField("pyzetiws")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xex730qh",
    "name": "questions",
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
  const collection = dao.findCollectionByNameOrId("fvym46tfw9ngpnu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pyzetiws",
    "name": "questions",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // remove
  collection.schema.removeField("xex730qh")

  return dao.saveCollection(collection)
})
