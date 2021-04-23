const assert = require('assert');
const { Car } = require('../Models/car')
const carFilteringHandler = require('../utils/car-filtering-handler')

describe('Test for filter car by parameters make color and model', () => {
    const car1 = new Car(1, "subaro", "model 1", "blue");
    const car2 = new Car(2, "nissan", "model 2", "red");
    const arr = [car1, car2];
    
    it('should return flitered list by make param', () => {

        const FilteredListByMake = carFilteringHandler.filterByParams(arr, { make: 'nissan', page: 1 });
        assert.deepStrictEqual(arr[1], FilteredListByMake[0], "you have an error in filterByParams method by make filtering");

    });
  
    it('should return flitered list by color param', () => {
        const FilteredListByColor = carFilteringHandler.filterByParams(arr, { color: 'blue', page: 1 });
        assert.deepStrictEqual(arr[0], FilteredListByColor[0], "you have an error in filterByParams method by color filtering");

    })

    it('should return flitered list by model param', () => {
        const FilteredListByModel = carFilteringHandler.filterByParams(arr, { model: 'model 2', page: 1 });
        assert.deepStrictEqual(arr[1], FilteredListByModel[0], "you have an error in filterByParams method by model filtering")
 
    })
});