const fs = require('fs');

const saveToDatabase = (DB) => {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2)), {
        encording: "utf8",
    }
};

module.exports = { saveToDatabase };