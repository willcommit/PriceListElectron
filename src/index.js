const table = require("./table.js")

const db = require('better-sqlite3')('../SpareParts.db');
 
const rows = db.prepare('SELECT * FROM SparePart').all();

// var data = [
//     [
//         "Tiger Nixon",
//         "System Architect",
//         "Edinburgh"
//     ],
//     [
//         "Garrett Winters",
//         "Director",
//         "Edinburgh"
//     ]
// ]

table.populateTable(rows)




