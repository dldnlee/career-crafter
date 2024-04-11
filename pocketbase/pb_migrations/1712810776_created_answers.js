/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wh8m267h58nxumt",
    "created": "2024-04-11 04:46:16.858Z",
    "updated": "2024-04-11 04:46:16.858Z",
    "name": "answers",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "3qvrxnmh",
        "name": "answers",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
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
  const collection = dao.findCollectionByNameOrId("wh8m267h58nxumt");

  return dao.deleteCollection(collection);
})
