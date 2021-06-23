const express = require('express');
const { body, validationResult } = require('express-validator');
const randomstring = require("randomstring");
const data = require('../data/users.json');
const { validate, toJSON } = require('../models/user');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(data);
});

// router.get('/id', auth, (req, res) => {
//     const user = data.find(user => user.email === req.user);

//     if(!user) return res.status(404).send('User does not exist.');
    
//     res.send(user);
// });
router.get('/:id', (req, res) => {
    const user = data.find(user => user.id === req.params.id);
    if(!user) return res.status(404).send('User does not exist.'); 
    res.send(toJSON(user));
})

router.post('/', body('name').isLength({ min: 3 }).escape(), body('email').isEmail().escape(), (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);

    let user = data.find( user => user.email === req.body.email);
    if (user) return res.status(400).send('This user is already registered.');

    const {name, email, tone} =  req.body;
    user = {
        id: `${randomstring.generate(3)}-${randomstring.generate(3)}`,
        name,
        email, 
        tone
    }

    data.push(user);
    res.status(201).send(toJSON(user));
});

module.exports = router;