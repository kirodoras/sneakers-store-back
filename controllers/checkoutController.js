import { ObjectId } from 'mongodb';
import { db } from '../databases/mongo.js';

const checkout = async (req, res) => {
    const userToken = req.headers.authorization.replace("Bearer ", '');
    const order = req.body;
    
    try {
        const user = await db.collection("sessions").findOne({ token: userToken });

        if(!user) {
            return res.status(403).send("Login is mandatory to submit an order");
        }

        db.collection("orders").insertOne({ order, user: ObjectId(user.userID) });
        return res.status(201).send("Order Submitted sucessfully");

    } catch (error) {
        return res.send("Internal server error, please try again later").status(500);
    }

}

export default checkout;