/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "norsygprr6f3ail",
    "created": "2024-05-06 13:00:13.145Z",
    "updated": "2024-05-06 13:00:13.145Z",
    "name": "player_specs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4sv0agga",
        "name": "specs",
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
  const collection = dao.findCollectionByNameOrId("norsygprr6f3ail");

  return dao.deleteCollection(collection);
})
