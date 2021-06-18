import {client} from "./dbdriver.js";
class createDaoProducts {
    constructor() {
        this.collection = "prods";
        this.dbname = "productos";
        this.client = client;
    }

    async getProduct(id) {
        const collection = await this.getCollection();
        const result = await collection.findOne({index:id});
        return result;
    }

    async getProducts(){
        const collection = await this.getCollection();
        const result = await collection.findOne({});
        return result;
    }

    async getCollection(){
        const cli = await this.client;
        const db = await cli.db(this.dbname);
        const collection = await db.collection(this.collection);
        return collection;
    }
}

export default createDaoProducts