const db = require('better-sqlite3')('priceList.db');

const excel = require('./excel.js')

var data = excel.parseFile('./Export.xlsx')

const insert = db.prepare('INSERT OR REPLACE INTO products (ItemNo, Model, UnitPrice, Discount, Cost, Description, VendorItemNo)' +
'VALUES (@ItemNo, @Model, @UnitPrice, @DealerDiscount, @UnitCost, @Description_EN, @VendorItemNo)');

const insertMany = db.transaction((values) => {
  for (const value of values) insert.run(value);
});

insertMany(data);

db.close()
