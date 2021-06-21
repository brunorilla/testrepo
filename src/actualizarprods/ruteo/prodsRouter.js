import express from "express";
import createDaoProducts from "../persistence/createDaoProducts.js";
import Product from "../models/Product.js";

const router = express.Router();

router.get('/', (req, res, next) => {

})


router.get('/name/:name', (req, res, next) => {
    const dao = new createDaoProducts();
    dao.getProduct(req.params.name).then(cursor => {
        cursor.forEach(el => {
            res.json(el);
        })
    })
});


router.post('/', async (request, response, next) => {

});


export default router