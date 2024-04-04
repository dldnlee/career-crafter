/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "62ioe2oaooqjeyt",
    "created": "2024-04-03 08:26:09.757Z",
    "updated": "2024-04-03 08:26:09.757Z",
    "name": "character_designs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "as3rvpfk",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cofvbcv0",
        "name": "image",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("62ioe2oaooqjeyt");

  return dao.deleteCollection(collection);
})
