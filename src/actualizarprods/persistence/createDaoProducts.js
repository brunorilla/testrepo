import {client} from "./dbdriver.js";
import Product from "../models/Product.js";

class createDaoProducts {
    constructor() {
        this.collection = "prods";
        this.dbname = "productos";
        this.client = client;
    }

    async getProduct(id) {
        console.log("ID IS " + id);
        const collection = await this.getCollection();
        let query = {name: id};
        const result = await collection.find(query);
        return result;
    }

    async postProducts(obj) {

    }

    async getProducts() {
        const collection = await this.getCollection();
        const result = await collection.findOne({});
        return result;
    }

    async getCollection() {
        const cli = await this.client;
        const db = await cli.db(this.dbname);
        const collection = await db.collection(this.collection);
        return collection;
    }
}

export default createDaoProducts