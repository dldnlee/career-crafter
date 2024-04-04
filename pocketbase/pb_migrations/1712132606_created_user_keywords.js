/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ktv2pk27pwf709k",
    "created": "2024-04-03 08:23:26.292Z",
    "updated": "2024-04-03 08:23:26.292Z",
    "name": "user_keywords",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eeniekr7",
        "name": "keywords",
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
  const collection = dao.findCollectionByNameOrId("ktv2pk27pwf709k");

  return dao.deleteCollection(collection);
})
