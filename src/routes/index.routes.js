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

router.get('/api/postgreSQL', controller.postgreSQLGet);

router.delete('/api/postgreSQL', controller.postgreSQLDelete);

router.post('/api/postgreSQL', upload.single('imagen'), controller.postgreSQLPost);

router.put('/api/postgreSQL', controller.postgreSQLPut);

router.get('/api/postgreSQL/users', controller.postgreSQLUsersGet);

router.get('/login', controller.loginGet);

router.get('/signup', controller.signupGet);

router.post('/login', controller.loginPost);

router.post('/signup', controller.signupPost);

router.get('/logout', controller.logout);

export default router;
