import {createServer} from "./compartidos/server/server.js";
import createDaoProducts from "./productos/persistence/createDaoProducts.js";
import CU_ListarProductos from "./productos/business/CU_ListarProductos.js";
const server = createServer();

server.conectar('8080');

const dao = new createDaoProducts();
dao.getProduct(1).then(value => {

    console.dir(value);
        /*.admin().listDatabases().then(value =>{
        value.databases.forEach(db => console.log(` - ${db.name}`))
    });*/
})

dao.getProducts().then(value=>{console.log(value)})

