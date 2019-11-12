const XLSX = require('xlsx')

const parseFile = function (filename) {

    const wb = XLSX.readFile(filename)
    const nameOfSheet = wb.SheetNames
    return XLSX.utils.sheet_to_json(wb.Sheets[nameOfSheet[0]])
    //return XLSX.utils.sheet_to_json(wb.Sheets[0])
} 

module.exports = {
    parseFile : parseFile
}