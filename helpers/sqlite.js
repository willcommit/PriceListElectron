const db = require('better-sqlite3')('priceList.db');

const excel = require('./excel.js')

var data = excel.parseFile("Export.xlsx")

const insert = db.prepare('INSERT INTO products (ItemNo, Model, Description, VendorItemNo)' +
' VALUES (@ItemNo, @Model, @Description_EN, @VendorItemNo)');

const insertMany = db.transaction((values) => {
  for (const value of values) insert.run(value);
});

insertMany(data);
console.log("Complete!")

db.close()