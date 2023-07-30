import postgreSQLGet from "./postgreSQL/postgreSQLGet.js";
import postgreSQLDelete from "./postgreSQL/postgreSQLDelete.js";
import postgreSQLPut from "./postgreSQL/postgreSQLPut.js";
import postgreSQLUsersGet from "./postgreSQL/postgreSQLUsersGet.js";
import postgreSQLGetImage from "./postgreSQL/postgreSQLGetImage.js";
import loginGet from "./register/loginGet.js";
import signupGet from "./register/signupGet.js";
import loginPost from "./register/loginPost.js";
import signupPost from "./register/signupPost.js";
import logout from "./register/logout.js";
import documentation from "./redirections/documentation.js";
import userTools from "./redirections/userTools.js";
import products from "./redirections/products.js";
import index from "./redirections/index.js";
import docAuth from "./redirections/docAuth.js";
import docUsers from "./redirections/docUsers.js";
import docProducts from "./redirections/docProducts.js";

const controller = {}

controller.index = index;

controller.products = products;

controller.documentation = documentation;

controller.docAuth = docAuth;

controller.docProducts = docProducts;

controller.docUsers = docUsers;

controller.userTools = userTools;

controller.postgreSQLGet = postgreSQLGet;

controller.postgreSQLDelete = postgreSQLDelete;

controller.postgreSQLPut = postgreSQLPut;

controller.postgreSQLUsersGet = postgreSQLUsersGet;

controller.postgreSQLGetImage = postgreSQLGetImage;

controller.loginGet = loginGet;

controller.signupGet = signupGet;

controller.loginPost = loginPost;

controller.signupPost = signupPost;

controller.logout = logout;




export default controller;
