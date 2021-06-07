var express = require('express');
var router = express.Router();
var helpers = require('../helpers/listProds.js');
var helpersPost = require('../helpers/writeProds.js');
const CasoDeUso_ListarProdsFactory = require('../models/CasoDeUso_ListarProdsFactory.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("Entering prods route");
    const CU_listar = CasoDeUso_ListarProdsFactory(helpers.listProds);
    let data = CU_listar.realizar('../persistencia/data.json');
    data.then((value => {
        return res.send(value);
    }))
});

router.get('/:id', function(req,res,next){
    let data = helpers.getFile('../persistencia/data.json');
    data.then(value => {
        return res.send(helpers.retrieveSingleProd(req.params.id,value));
    })
});

router.post('/', function(req,res,nex){
    console.log("post call");
    let result = helpersPost.createFile('test', req.body);
    result.then(value => {
        helpersPost.compareProds(value);
    })
});

module.exports = router;
