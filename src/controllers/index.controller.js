//API
import apiGetProducts from "./API/products/ApiGetProducts.js";
import apiDeleteProduct from "./API/products/ApiDeleteProduct.js";
import apiPostProduct from "./API/products/ApiPostProduct.js";
import apiPutProduct from "./API/products/ApiPutProduct.js";
import apiLogin from "./API/register/ApiLogin.js";
import apiSignup from "./API/register/ApiSignup.js";
import apiLogout from "./API/register/ApiLogout.js";
import apiGetUsers from "./API/users/ApiUserGet.js";

//Frontend
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
import loginSuccess from "./redirections/loginSuccess.js";
import loginFailure from "./redirections/loginFailure.js";
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

controller.apiGetProduct = apiGetProducts;

controller.deleteProduct = deleteProduct;

controller.apiDeleteProduct = apiDeleteProduct;

controller.apiPostProduct = apiPostProduct;

controller.apiPutProduct = apiPutProduct;

controller.loginGet = loginGet;

controller.signupGet = signupGet;

controller.signupPost = signupPost;

controller.loginPost = loginPost;

controller.apiSignup = apiSignup;

controller.logout = logout;

controller.apiLogin = apiLogin;

controller.apiLogout = apiLogout;

controller.loginSuccess = loginSuccess;

controller.loginFailure = loginFailure;

controller.postProduct = postProduct

controller.putProduct  = putProduct;

controller.apiGetUsers  = apiGetUsers;





export default controller;
