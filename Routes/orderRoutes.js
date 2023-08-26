
// para git,las 
const express = require('express');
const router = express.Router();
const services = require('../services/orderService');
const order = require('../services/orderService');


router.get('/',
(req, res) => {
    const orders = services.getAll();
    res.status(200).json({
        message: 'Here are your clients',
        orders
    })
})

router.get('/:id',
(req, res) => {
    const {id} = order.getOne(id);
});


router.patch('/modify-name/:id',
(req, res) => {
    const {name} = req.body;
    const{id} = req.params;
    const confirmation = services.updateName(id,name);
    res.status(200).json({ confirmation});
});

router.delete('/')
module.exports = router;