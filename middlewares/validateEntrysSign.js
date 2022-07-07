import { signSchema } from '../schemas/authSchemas.js';

export function validateEntrysSign(req, res, next) {
    const validationBody = signSchema.validate(req.body);

    if (validationBody.error) {
        res.sendStatus(422);
        return;
    }

    next();
}