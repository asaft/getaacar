const assert = require('assert');
const { Car } = require('../Models/car')
const carDataHandler = require('../utils/car-data-handler')

describe('Test for convert csv text to car', () => {
    const csvstr = '573858,Ford,C-Max Energi,White\n573682,Nissan,Murano,Brown\n573868,Ford,Escape,White';
    const list = carDataHandler.convertCSVTOCars(csvstr);
   
    it('should get the correct array length', () => {
        assert.deepStrictEqual(list.length, 3, "you have an error in numbers of array elements");
  });

    it('should get the correct make', () => {
        assert.deepStrictEqual(list[0].make, 'Ford', "you have an error in coverting string to make");
      });
    it('should get the correct color', () => {
        assert.deepStrictEqual(list[1].color, 'Brown', "you have an error in coverting string to color");
    });

    it('should get the correct model', () => {
        assert.deepStrictEqual(list[2].model, 'Escape', "you have an error in coverting string to model");
    });
});