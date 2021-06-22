const request = require('supertest');
const data = require('../../data/users.json');

let server;

describe('/api/users', () => {
  beforeEach(() => { server = require('../../index'); })
  afterEach(async () => { 
    server.close(); 
  });

  describe('GET /', () => {
    it('should return all users', async () => {
      const res = await request(server).get('/api/users');
      
      expect(res.status).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body.some(user => user.email === 'hannah@email.com')).toBeTruthy();
    });

    it('should return 404 if invalid id is passed', async () => {
        const res = await request(server).get('/api/users/1');
  
        expect(res.status).toBe(404);
      });
  });
});

describe('POST /', () => {
    let name, email; 

    const exec = async () => {
      return await request(server)
        .post('/api/users')
        .send({ name, email });
    }

    beforeEach(() => {    
      name = 'test user'; 
      email = 'test@email.com'; 
    })
    afterEach(async () => { 
        name = ''; 
    });

    it('should return 400 if name is less than 3 characters', async () => {
      name = 'aa'; 
      
      const res = await exec();

      expect(res.status).toBe(400);
    });

    it('should save the user if it is valid', async () => {
        await exec();
    
        const user = data.find( user => user.email === email);
  
        expect(user).not.toBeNull();
      });

    it('should return the user if it is valid', async () => {
        email = 'test_another@email.com'; 

        const res = await exec();

        expect(res.body).toHaveProperty('name', 'test user');
        expect(res.body).toHaveProperty('email', 'test_another@email.com');
    });
  });