import express from "express";
import createDaoProducts from "../persistence/createDaoProducts.js";
import Product from "../models/Product.js";
import CU_EscribirProducto from "../business/CU_EscribirProducto.js";
import CU_EscribirProducto from "../business/CU_EscribirProducto.js";

const router = express.Router();

router.get('/', (req, res, next) => {

})


router.get('/name/:name', (req, res, next) => {
    const dao = new createDaoProducts();
    dao.getProduct(req.params.name).then(cursor => {
        let cu_escribir = new CU_EscribirProducto();
        cursor.forEach(el => {
            cu_escribir.writeFile(el);
            res.json(el);
        })
    })
});


router.post('/', async (request, response, next) => {

});


export default router