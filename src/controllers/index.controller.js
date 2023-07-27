import postgreSQLGet from "./postgreSQL/postgreSQLGet.js";
import postgreSQLDelete from "./postgreSQL/postgreSQLDelete.js";
import postgreSQLPut from "./postgreSQL/postgreSQLPut.js";
import postgreSQLUsersGet from "./postgreSQL/postgreSQLUsersGet.js";
import staticGet from "./staticDatabase/CRUD/get.js";
import staticGetById from "./staticDatabase/CRUD/getById.js";
import staticPost from "./staticDatabase/CRUD/post.js";
import staticPut from "./staticDatabase/CRUD/put.js";
import staticDelete from "./staticDatabase/CRUD/delete.js";
import postgreSQLGetImage from "./postgreSQL/postgreSQLGetImage.js";
import loginGet from "./register/loginGet.js";
import signupGet from "./register/signupGet.js";
import loginPost from "./register/loginPost.js";
import signupPost from "./register/signupPost.js";
import logout from "./register/logout.js";
import flash from "express-flash";

const controller = {}

controller.index = (req, res) => {
    res.render('products');
}

controller.products = (req, res) => {
    res.render('products');
}

controller.aboutUs = (req, res) => {
    res.render('about-us');
}

controller.userTools = (req, res) => {
    const mensaje = req.flash('mensaje')[0];
    res.render('userTools', { mensaje });
}

controller.postgreSQLGet = postgreSQLGet;

controller.postgreSQLDelete = postgreSQLDelete;

controller.postgreSQLPut = postgreSQLPut;

controller.postgreSQLUsersGet = postgreSQLUsersGet;

controller.staticGet = staticGet;

controller.staticGetById = staticGetById;

controller.staticPost = staticPost;

controller.staticPut = staticPut;

controller.staticDelete = staticDelete;

controller.postgreSQLGetImage = postgreSQLGetImage;

controller.loginGet = loginGet;

controller.signupGet = signupGet;

controller.loginPost = loginPost;

controller.signupPost = signupPost;

controller.logout = logout;



export default controller;
