import postgreSQLGet from "./API/products/ApiGetProduct.js";
import postgreSQLDelete from "./API/products/ApiDeleteProduct.js";
import postgreSQLPost from "./API/products/ApiPostProduct.js";
import postgreSQLPut from "./API/products/ApiPutProduct.js";
import postgreSQLUsersGet from "./API/users/ApiUserGet.js";
import deleteProduct from "./frontendForms/products/deleteProduct.js";
import loginGet from "./frontendForms/register/loginGet.js";
import signupGet from "./frontendForms/register/signupGet.js";
import loginPost from "./frontendForms/register/loginPost.js";
import signupPost from "./frontendForms/register/signupPost.js";
import logout from "./frontendForms/register/logout.js";
import documentation from "./redirections/documentation.js";
import userTools from "./redirections/userTools.js";
import products from "./redirections/products.js";
import index from "./redirections/index.js";
import docAuth from "./redirections/docAuth.js";
import docUsers from "./redirections/docUsers.js";
import docProducts from "./redirections/docProducts.js";
import loginAPI from "./API/register/ApiLogin.js";
import loginSuccess from "./redirections/loginSuccess.js";
import loginFailure from "./redirections/loginFailure.js";
import signupAPI from "./API/register/ApiSignup.js";
import putProduct from "./frontendForms/products/putProduct.js";
import postProduct from "./frontendForms/products/postProduct.js";


const controller = {}

controller.index = index;

controller.products = products;

controller.documentation = documentation;

controller.docAuth = docAuth;

controller.docProducts = docProducts;

controller.docUsers = docUsers;

controller.userTools = userTools;

controller.postgreSQLGet = postgreSQLGet;

controller.deleteProduct = deleteProduct;

controller.postgreSQLDelete = postgreSQLDelete;

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

controller.postProduct = postProduct

controller.putProduct  = putProduct;

// controller.postUser  = postUser;




export default controller;
