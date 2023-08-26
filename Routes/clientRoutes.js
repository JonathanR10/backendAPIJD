const express = require('express');
const router = express.Router();
const services = require('../services/clientService');
const client = require('../services/clientService');


router.get('/',
(req, res) => {
    const clients = services.getAll();
    res.status(200).json({
        message: 'Here are your clients',
        clients
    })
})

router.get('/:id',
(req, res) => {
    const { id } = req.params;
        const client = services.getOne(id);
        res.status(200).json({
            message: 'Here are your client',
            client
})
});

router.post('/',
(req, res) => {
    const data = req.body;
    const confirmation = services.create(data);
    res.status(201).json({
        confirmation
    });
}
);


router.patch('/modify-name/:id',
(req, res) => {
    const {name} = req.body;
    const{id} = req.params;
    const confirmation = services.updateName(id,name);
    res.status(200).json({ confirmation});
})

router.delete('/:id', 
    (req, res) => {
        const { id } = req.params;
        const confirmation = services.delete(id);
        res.status(200).json({
            confirmation
        });

    });
    
module.exports = router;