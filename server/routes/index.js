const router = require('express').Router();
const categoriesController = require('../controllers').categories;
const modelsController = require('../controllers').models;
const vendorsController = require('../controllers').vendors;
const ordersController = require('../controllers').orders;

//Categories
router.post('/', categoriesController.create);
router.get('/', categoriesController.list);
router.get('/:categoryId', categoriesController.find);

//Models
router.post('/:categoryId/models/create', modelsController.create);
router.get('/:categoryId/models', modelsController.list);
router.get('/:categoryId/models/:modelId', modelsController.find);
router.put('/:categoryId/models/:modelId', modelsController.update);

router.get('/all/models', modelsController.list);


//Vendors
router.get('/all/vendors', vendorsController.list);
router.get('/all/vendors/:vendorId', vendorsController.find);
router.post('/all/vendors/create', vendorsController.create);
router.put('/all/vendors/:vendorId', vendorsController.update);

//Orders
router.get('/all/orders', ordersController.list);
router.get('/all/orders/:orderId', ordersController.find);
router.post('/all/orders/create', ordersController.create);

module.exports = router;
