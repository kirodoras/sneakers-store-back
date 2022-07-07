import joi from 'joi';

const signSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    picture: joi.string().required()
});

export { signSchema };