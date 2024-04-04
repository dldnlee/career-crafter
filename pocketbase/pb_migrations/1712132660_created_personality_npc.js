/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qvzypq0ls4fynbe",
    "created": "2024-04-03 08:24:20.707Z",
    "updated": "2024-04-03 08:24:20.707Z",
    "name": "personality_npc",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uzxu5fus",
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
        "id": "sodkgmhw",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qvzypq0ls4fynbe");

  return dao.deleteCollection(collection);
})
