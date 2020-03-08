// required imports
var express = require('express');
var router = express.Router();

var product_controller = require('../controller/book');

// routes for api dispatching ( api-gateway )
router.get('/test', product_controller.test);

router.post('/create', product_controller.product_create);

router.get('/:id', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);


module.exports = router;