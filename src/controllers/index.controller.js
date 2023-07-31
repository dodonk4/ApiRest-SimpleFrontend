import postgreSQLGet from "./postgreSQL/products/postgreSQLGet.js";
import postgreSQLDelete from "./postgreSQL/products/postgreSQLDelete.js";
import postgreSQLPost from "./postgreSQL/products/postgreSQLPost.js";
import postgreSQLPut from "./postgreSQL/products/postgreSQLPut.js";
import postgreSQLUsersGet from "./postgreSQL/users/postgreSQLUsersGet.js";
import deleteProduct from "./frontendForms/products/deleteProduct.js";
import loginGet from "./register/frontendForms/loginGet.js";
import signupGet from "./register/frontendForms/signupGet.js";
import loginPost from "./register/frontendForms/loginPost.js";
import signupPost from "./register/frontendForms/signupPost.js";
import logout from "./register/frontendForms/logout.js";
import documentation from "./redirections/documentation.js";
import userTools from "./redirections/userTools.js";
import products from "./redirections/products.js";
import index from "./redirections/index.js";
import docAuth from "./redirections/docAuth.js";
import docUsers from "./redirections/docUsers.js";
import docProducts from "./redirections/docProducts.js";
import loginAPI from "./register/API Register/loginAPI.js";
import loginSuccess from "./register/API Register/passportMessages/loginSuccess.js";
import loginFailure from "./register/API Register/passportMessages/loginFailure.js";
import signupAPI from "./register/API Register/signupAPI.js";

const controller = {}

controller.index = index;

controller.products = products;

controller.documentation = documentation;

controller.docAuth = docAuth;

controller.docProducts = docProducts;

controller.docUsers = docUsers;

controller.userTools = userTools;

controller.postgreSQLGet = postgreSQLGet;

controller.postgreSQLDelete = deleteProduct;

// controller.postgreSQLDelete = postgreSQLDelete;

controller.postgreSQLPost = postgreSQLPost;

controller.postgreSQLPut = postgreSQLPut;

controller.postgreSQLUsersGet = postgreSQLUsersGet;

controller.loginGet = loginGet;

controller.signupGet = signupGet;

controller.loginPost = loginPost;

controller.signupPost = signupPost;

controller.logout = logout;

controller.loginAPI = loginAPI;

controller.loginSuccess = loginSuccess;

controller.loginFailure = loginFailure;

controller.signupAPI = signupAPI;




export default controller;
