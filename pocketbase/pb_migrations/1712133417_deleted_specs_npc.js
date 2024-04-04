/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("c8r5wk9igd3jyrz");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "c8r5wk9igd3jyrz",
    "created": "2024-04-03 08:23:59.623Z",
    "updated": "2024-04-03 08:23:59.623Z",
    "name": "specs_npc",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "53z6zjy5",
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
        "id": "tgc70ieq",
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
