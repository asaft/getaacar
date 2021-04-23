const XLSX = require('xlsx');


const parseToCSV = (filepath) => {
    var workbook = XLSX.readFile(filepath);
    var sheet_name_list = workbook.SheetNames;
    var worksheet = workbook.Sheets[sheet_name_list[0]];
    return XLSX.utils.sheet_to_csv(worksheet);

}


module.exports = {
    parseToCSV
}