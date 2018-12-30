const path = require("path");
const JsonDB = require("node-json-db");
const db = new JsonDB(
    path.join(global.__baseDirname, "database", "settingDb.cache.json"),
    true,
    global.isDebugMode
);

module.exports = () => {
    return db;
};
