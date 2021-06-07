const CasoDeUso_ListarProds = require('./CasoDeUso_ListarProds.js')

function CasoDeUso_ListarProdsFactory(listarFunc){
    return new CasoDeUso_ListarProds(listarFunc);
}

module.exports = CasoDeUso_ListarProdsFactory;