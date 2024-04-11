/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "a4xjxzchl54buys",
    "created": "2024-04-11 04:45:28.876Z",
    "updated": "2024-04-11 04:45:28.876Z",
    "name": "questions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xi1cmcry",
        "name": "field",
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
        "id": "ib5tqrso",
        "name": "questions",
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
  const collection = dao.findCollectionByNameOrId("a4xjxzchl54buys");

  return dao.deleteCollection(collection);
})
