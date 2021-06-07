const fs = require('fs');


const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

function listProds(route) {
    return new Promise((resolve, reject) => {
        getFile(route)
            .then(data => {
                console.log("Data reached");
                resolve(JSON.parse(data));
            })
            .catch(err => reject(err))
    })
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

function retrieveSingleProd(id, data) {
    data = JSON.parse(data);
    var responseValue;
    data.forEach((el) => {
        if (el.index === parseInt(id)) {
            console.log(el);
            responseValue = el;
        }
    })
    return responseValue;
}


module.exports = {getFile, listProds, retrieveSingleProd};