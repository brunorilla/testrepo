class CasoDeUso_ListarProds{
    constructor(listarFunc) {
        this.listarFunc = listarFunc;
    }
    async realizar(url){
        const result = await this.listarFunc(url);
        console.log(result);
        return result;
    }
    async realizarPorId(url,params){
        const result = await this.listarFunc(url,params);
        console.log(result);
        return result;
    }
}


module.exports = CasoDeUso_ListarProds;
