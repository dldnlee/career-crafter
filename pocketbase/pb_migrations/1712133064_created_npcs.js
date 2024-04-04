/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bicitbaft78kjbd",
    "created": "2024-04-03 08:31:04.343Z",
    "updated": "2024-04-03 08:31:04.343Z",
    "name": "npcs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rc2olnr0",
        "name": "npc_info",
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
  const collection = dao.findCollectionByNameOrId("bicitbaft78kjbd");

  return dao.deleteCollection(collection);
})
