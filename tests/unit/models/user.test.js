const { validate, toJSON } = require('../../../models/user');
const data = require('../../../data/users.json');

describe('toJSON(user)', () => {
    it('should return a valid user json', () => {
        const { id, name, email } = data[0];

        const payload = { 
            id,
            name, 
            email
        };
        const result = toJSON(payload);
        expect(result).toMatchObject({name, email});
    });
  });

  describe('validate(user)', () => {
    it('should return error message for invalid data', () => {
        const payload = { 
            name: 'a', 
            email: 'a@'
        };
        const { error } = validate(payload);
        expect(error).toHaveProperty('message');
    });
  });