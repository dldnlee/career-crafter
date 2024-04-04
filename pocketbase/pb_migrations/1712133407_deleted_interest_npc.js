/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2xceqadgftqo1ly");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "2xceqadgftqo1ly",
    "created": "2024-04-03 08:25:04.255Z",
    "updated": "2024-04-03 08:25:04.255Z",
    "name": "interest_npc",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qgvxiicq",
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
      },
      {
        "system": false,
        "id": "vitbmpdh",
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
})
