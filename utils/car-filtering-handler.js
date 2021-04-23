const _         = require('underscore');
const PAGE_SIZE = 21;

const getFilteredList = (field,fieldName,list) =>{
    if(field){
        filteredCarsList = _.filter(carList,{fieldName:field});
    }
}
const filterByParams = (carList,params) =>{
    const {make,page,model,color} = params;
    
    if(make){
        carList = _.filter(carList,{make});
    }
    if(model){
        carList = _.filter(carList,{model}); 
    }
    if(color){
        carList = _.filter(carList,{color}); 
    }
    
    const startIndex = (page - 1 ) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return carList.slice(startIndex,endIndex );

}

module.exports = {
    filterByParams
}