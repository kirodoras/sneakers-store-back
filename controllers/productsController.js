import { ObjectId } from 'mongodb';
import { db } from '../databases/mongo.js';

export async function getAllProducts(req, res) {
    try {
        const products = await db.collection("products").find().toArray();
        res.send(products).status(302);
    } catch {
        res.sendStatus(500);
    }
}

export async function getProduct(req, res) {
    const { _id } = req.body;
    try {
        const product = await db.collection("products").findOne({ _id: ObjectId(_id) });
        res.send(product).status(302);
    } catch {
        res.sendStatus(500);
    }
}