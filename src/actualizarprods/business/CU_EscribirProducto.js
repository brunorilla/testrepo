import fs from 'fs';

class CU_EscribirProducto {


    createDate(){
        let mils = Date.now();
        let date = new Date(mils);
        return date.toISOString().slice(0,19).replace(/:/g, "-");

    }
    writeAllResults(content){

    }

    writeFile(content){
        content = JSON.stringify(content);
        let filename = this.createDate();
        fs.writeFile(`./compartidos/output/${filename}.txt`, content,{flag: 'a+'}, err => {
            if (err) console.error(err)
        })
    }

}

export default CU_EscribirProducto;