import { ObjectId } from 'mongodb';
import { db } from '../databases/mongo.js';
import { v4 as uuid } from 'uuid';

export async function signUser(req, res) {
    const { name, email, picture } = req.body;

    try {
        const user = await db.collection("users").findOne({ email: email });
        const token = uuid();

        if (user) {
            const userSession = await db.collection("sessions").findOne({ userID: user._id, });

            if (!userSession) {
                res.sendStatus(500);
                return;
            }

            await db.collection("sessions").updateOne(
                { userID: user._id },
                { $set: { token } }
            );

            res.status(202).send({
                name,
                picture,
                token
            });
            return;
        } else {
            const _id = ObjectId();

            await db.collection("users").insertOne({
                _id,
                name,
                email,
                picture
            });

            await db.collection("carts").insertOne({
                userID: _id,
                total: 0,
                itens: []
            });

            await db.collection("sessions").insertOne({
                userID: _id,
                token: token
            });

            res.status(201).send({
                name,
                picture,
                token
            });
            return;
        }
    } catch (error) {
        res.sendStatus(500);
    }
}