const assert = require('assert');
const path   = require('path');

const XlsxReader = require('../utils/xlsx-reader')
describe('Test for filter car by parameters make color and model', () => {
 it('should parse excel file', () => {
    const filepath = path.join(__dirname, 'fs_cars.xlsx')
    const csvStr = XlsxReader.parseToCSV(filepath);
    
    const breakLine = csvStr.indexOf('\n') > -1;
    const comma = csvStr.indexOf(',') > -1;
   
    assert.deepStrictEqual(breakLine,true,'can not convert xlsx file csv')
    assert.deepStrictEqual(comma,true,'can not convert xlsx file csv')
  });

}); 