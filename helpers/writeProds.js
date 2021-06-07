const helpers = require('./listProds.js');
const fs = require('fs');

const createFile = (fileName, content) => {
    let data = JSON.stringify(content)
    return new Promise(function (resolve, reject) {
        fs.writeFile(fileName, data, (err) => {
            if (err) reject(err);
            else resolve(data);
        });
    });


}


const compareProds = (newData) => {
    console.log("inside compareProds" + newData);
    let data = helpers.getFile('../persistencia/data.json');
    data.then((value) => {
        let newDocument = [];
        value = JSON.parse(value);
        console.log(newData);
        newData = JSON.parse(newData);
        newData = !Array.isArray(newData) ? convertJsonToArray(newData) : newData;
        value.forEach((el) => {
            newData.forEach((nd) => {
                for (const dataKey in el) {
                    if (el.hasOwnProperty(dataKey)) {
                        for (const ndKey in nd) {
                            if (nd.hasOwnProperty(ndKey)) {
                                if (nd[ndKey] === el[dataKey]) {
                                    console.log(nd[ndKey]);
                                }
                            }
                        }
                    }
                }
            })

        })
    })
}

function convertJsonToArray(json_data) {
    var result = [];
    for (var i in json_data) {
        result.push([i, json_data[i]]);
    }
    return result;
}


module.exports = {createFile, compareProds};