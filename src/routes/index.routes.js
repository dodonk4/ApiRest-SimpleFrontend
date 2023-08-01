import express from 'express';
import multer from 'multer';
import controller from '../controllers/index.controller.js';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import checkAuthenticated from '../auth/checkAuthenticated.js';
import checkNotAuthenticated from '../auth/checkNotAuthenticated.js';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(methodOverride('_method'));

router.get('/', controller.index);

router.get('/products', controller.products);

router.get('/documentation', controller.documentation);

router.get('/documentation/products', controller.docProducts);

router.get('/documentation/users', controller.docUsers);

router.get('/documentation/auth', controller.docAuth);

router.get('/userTools', checkAuthenticated, controller.userTools);

router.get('/api/products', controller.apiGetProduct);

router.delete('/api/products', controller.apiDeleteProduct);

router.post('/api/products', upload.single('imagen'), controller.apiPostProduct);

router.put('/api/products', upload.single('imagen'), controller.apiPutProduct);

router.get('/api/users', controller.postgreSQLUsersGet);

// router.post('/api/users', controller.postgreSQLUsersPost);

// router.get('/api/users', controller.postgreSQLUsersPut);

router.get('/login', controller.loginGet);

router.get('/signup', controller.signupGet);

router.post('/login', controller.loginPost);

router.post('/signup', controller.signupPost);

router.get('/logout', controller.logout);

router.post('/api/login', controller.apiLogin);

router.post('/api/loginSuccess', controller.loginSuccess);

router.post('/api/loginFailure', controller.loginFailure);

router.post('/api/signup', controller.apiSignup);

router.delete('/products', controller.deleteProduct)

router.put('/products', upload.single('imagen'), controller.putProduct)

router.post('/products', controller.postProduct)

// router.post('/users', controller.postUser);



export default router;
