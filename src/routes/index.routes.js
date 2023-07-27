import express from 'express';
import controller from '../controllers/index.controller.js';
import bodyParser from 'body-parser';
import passport from 'passport';
import methodOverride from 'method-override';
import checkAuthenticated from '../auth/checkAuthenticated.js';
import checkNotAuthenticated from '../auth/checkNotAuthenticated.js';

const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(methodOverride('_method'));

router.get('/', controller.index);

router.get('/products', controller.products);

router.get('/about-us', controller.aboutUs);

router.get('/userTools', checkAuthenticated, controller.userTools);

router.get('/api/postgreSQL', controller.postgreSQLGet);

router.delete('/api/postgreSQL', controller.postgreSQLDelete);

// router.put('/api/postgreSQL/:id', controller.postgreSQLPut);

router.put('/api/postgreSQL', controller.postgreSQLPut);

router.put('/api/postgreSQL/users', controller.postgreSQLUsersGet);

router.get('/api/vehicles', controller.staticGet)
  
router.get('/api/vehicles/:id', controller.staticGetById)
  
router.post('/api/vehicles', controller.staticPost)
  
router.delete('/api/vehicles/:id', controller.staticDelete);
  
router.put('/api/vehicles/:id', controller.staticPut);
  
router.get('/products-from-database', controller.postgreSQLGetImage);

router.get('/login', controller.loginGet);

router.get('/signup', controller.signupGet);

router.post('/login', passport.authenticate('local', {
    successRedirect: '/products',
    failureRedirect: '/login',
    failureFlash: true
}));

// , controller.loginPost

router.post('/signup', controller.signupPost);

router.get('/logout', controller.logout);

export default router;
