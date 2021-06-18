import express from "express";

const router = express.Router();


router.get('/', (request, response) => {
    return response.json("hola");
})
router.post('/', async (request, response) => {
    console.log("hola");
    res.json("hola");
});


export default router