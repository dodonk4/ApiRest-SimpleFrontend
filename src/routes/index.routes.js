import express from 'express';
import controller from '../controllers/index.controller.js';

const router = express.Router()

router.get('/', controller.index);

router.get('/products', controller.products);

router.get('/about-us', controller.aboutUs);

router.get('/settings', controller.settings);

router.get('/api/postgreSQL', controller.postgreSQLGet);

router.delete('/api/postgreSQL/:id', controller.postgreSQLDelete);

router.put('/api/postgreSQL/:id', controller.postgreSQLPut);

router.get('/api/vehicles', controller.staticGet)
  
router.get('/api/vehicles/:id', controller.staticGetById)
  
router.post('/api/vehicles', controller.staticPost)
  
router.delete('/api/vehicles/:id', controller.staticDelete);
  
router.put('/api/vehicles/:id', controller.staticPut);
  
router.get('/products-from-database', controller.postgreSQLGetImage);

export default router;