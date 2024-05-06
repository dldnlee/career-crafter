/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fvym46tfw9ngpnu",
    "created": "2024-05-06 13:55:18.309Z",
    "updated": "2024-05-06 13:55:18.309Z",
    "name": "questions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9efgjffr",
        "name": "category",
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
        "id": "pyzetiws",
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
  const collection = dao.findCollectionByNameOrId("fvym46tfw9ngpnu");

  return dao.deleteCollection(collection);
})
