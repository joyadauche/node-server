const Joi = require('joi');

function validateUser(user) {
    const schema = Joi.object(
      { 
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        tone: Joi.string().valid('humorous', 'ironic' , 'cynical')
      },
    );

    return schema.validate(user)
}

function toJSON(user) {
  return {
    name: user.name,
    email: user.email,
    tone: user.tone
  }
}

exports.validate = validateUser;
exports.toJSON = toJSON;