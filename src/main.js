import {createServer} from "./compartidos/server/server.js";
import createDaoProducts from "./actualizarprods/persistence/createDaoProducts.js";
import CU_ListarProductos from "./actualizarprods/business/CU_ListarProductos.js";
import Product from "./actualizarprods/models/Product.js";
import axios from 'axios';
const server = createServer();

server.conectar('8080');
