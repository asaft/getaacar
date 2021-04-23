const path                      = require('path')
const converter                 = require('json-2-csv');
const XlsxReader                = require('../utils/xlsx-reader');
const CarDataHandler            = require('../utils/car-data-handler');
const carFliteringHandler       = require('../utils/car-filtering-handler');

class CarController {

    static  getCsvFile(req, res) {
        const filepath = path.join(rootPath, 'DAL/fs_cars.xlsx')

        const csvStr = XlsxReader.parseToCSV(filepath);

        const carList = CarDataHandler.convertCSVTOCars(csvStr);

        const finalResults = carFliteringHandler.filterByParams(carList, req.query);

        
        converter.json2csv(finalResults, (err, csv) => {
            if (err) {
                throw err;
            }
          
          res.attachment('todos.csv');
        res.set('Content-Type', 'application/octet-stream');
        res.send(csv)
            
        });

       

        
       // res.status(200).send(csv);
    }
}
module.exports = CarController;