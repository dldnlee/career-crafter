/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "14ivepdzv20qdz1",
    "created": "2024-05-06 13:58:45.032Z",
    "updated": "2024-05-06 13:58:45.032Z",
    "name": "answers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4apgzpgq",
        "name": "answers",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "phvmz0mq",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("14ivepdzv20qdz1");

  return dao.deleteCollection(collection);
})
