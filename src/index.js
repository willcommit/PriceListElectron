const table = require("./table.js")

const db = require('better-sqlite3')('C:\\Users\\welfv\\OneDrive\\Skrivbord\\PriceListElectron\\helpers\\priceList.db');
 
const rows = db.prepare('SELECT * FROM products').all();

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




