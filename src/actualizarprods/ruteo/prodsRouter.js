import express from "express";
import createDaoProducts from "../persistence/createDaoProducts.js";
import Product from "../models/Product.js";

const router = express.Router();

router.get('/', (req,res,next)=>{

})


router.get('/:id', (req, res,next) => {
    /*
    const dao = new createDaoProducts();
    dao.getProducts().then(value => {


    }).then(r =>{
        setTimeout(function(r){

            let prod = new Product(r.index, r.name, r.price);
            return res.json(prod);
        },5000)
    }) */
    const dao = new createDaoProducts();
    dao.getProduct(req.params.id).then(value => {

        console.dir(value);
        /*.admin().listDatabases().then(value =>{
        value.databases.forEach(db => console.log(` - ${db.name}`))
    });*/
    })
});


router.post('/', async (request, response,next) => {

});


export default router