const { Car }  = require('../Models/car')

    const convertCSVTOCars = (csvStr) =>{
        let carList = []
        const csvStrArr = csvStr.split('\n');
        csvStrArr.forEach(element => {
            const elmentArr = element.split(',');
            const car = new Car(elmentArr[0],elmentArr[1],elmentArr[2],elmentArr[3]);
            carList.push(car);
        });
        
        return carList;
    }

module.exports = {
    convertCSVTOCars
}