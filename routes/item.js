const express = require('express');
const router = express.Router();

const item_controller = require('../controllers/itemController');

router.get('/', item_controller.list);
router.get('/create', item_controller.create_get);
router.post('/item/create', item_controller.create_post);
router.get('/item/:id/delete', item_controller.delete_get);
router.post('/item/:id/delete', item_controller.delete_post);
router.get('/item/:id/update', item_controller.update_get);
router.post('/item/:id/update', item_controller.update_post);
router.get('/item/:id', item_controller.detail);

module.exports = router;
