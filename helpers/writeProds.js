const fs = require('fs');

const createFile = (fileName,content)=>{
    let data = JSON.stringify(content)
    fs.writeFile(fileName,data,(err)=>{
        if(err) throw err;


    });
}


module.exports = {createFile};