const fs = require('fs');


const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName,'utf-8', (err, data) => {
            if (err) {
                reject(err)  // calling `reject` will cause the promise to fail with or without the error passed as an argument
                return        // and we don't want to go any further
            }
            resolve(data)
        })
    })
}

function listProds(route) {
    getFile(route)
        .then(data => {return JSON.parse(data)})
        .catch(err => console.error(err))
}
/*
function retrieveSingleProd(id,data){
    data = JSON.parse(data);
    data.forEach((el)=>{
        for (const dataKey in el) {
            if (el.hasOwnProperty(dataKey)) {

            }
        }
    })
}
*/

function retrieveSingleProd(id,data){
    data = JSON.parse(data);
    var responseValue;
    data.forEach((el)=>{
        if(el.index === parseInt(id)){
            console.log(el);
            responseValue = el;
        }
    })
    return responseValue;
}




module.exports = {getFile, listProds, retrieveSingleProd};