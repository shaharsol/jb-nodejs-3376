import express, { NextFunction, Request, Response }  from "express";
import Joi from "joi";
import validate from "./middlewares/input-validation";

const server = express();

interface Product {
    id: number,
    name: string,
    stock: number,
    price: number,
    image: File
}

function addProduct(req: Request, res: Response, next: NextFunction) {
    console.log('adding product....')
}

const addProductValidator = Joi.object<Product>({
    name: Joi.string().alphanum().min(4).lowercase().required(),
    price: Joi.number().min(1).max(1000).required(),
    stock: Joi.number().min(0).max(1000).default(0),
    image: Joi.object({
        mimetype: Joi.string().valid('image/jpg', 'image/jpeg', 'image/png'),
    }).unknown(true).optional()
});

server.post('/products', validate(addProductValidator), addProduct);

server.listen(8080, () => {
    console.log('started...')
})

