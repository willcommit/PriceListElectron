const XLSX = require('xlsx')

const parseFile = function (filename) {

    const wb = XLSX.readFile(filename, {sheetStubs: true})

    const nameOfSheet = wb.SheetNames
    var data1 = XLSX.utils.sheet_to_json(wb.Sheets[nameOfSheet[0]], {range: 0, defval: ""})

    return data1
} 

// var data = parseFile("C:\\Users\\welfv\\OneDrive\\Skrivbord\\PriceListElectron\\helpers\\Export.xlsx")

// console.log(data)


module.exports = {
    parseFile : parseFile
}