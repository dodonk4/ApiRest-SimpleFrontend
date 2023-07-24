import postgreSQLGet from "./postgreSQL/postgreSQLGet.js";
import postgreSQLDelete from "./postgreSQL/postgreSQLDelete.js";
import postgreSQLPut from "./postgreSQL/postgreSQLPut.js";
import staticGet from "./staticDatabase/CRUD/get.js";
import staticGetById from "./staticDatabase/CRUD/getById.js";
import staticPost from "./staticDatabase/CRUD/post.js";
import staticPut from "./staticDatabase/CRUD/put.js";
import staticDelete from "./staticDatabase/CRUD/delete.js";
import postgreSQLGetImage from "./postgreSQL/postgreSQLGetImage.js";

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

controller.settings = (req, res) => {
    res.render('settings');
}

controller.postgreSQLGet = postgreSQLGet;

controller.postgreSQLDelete = postgreSQLDelete;

controller.postgreSQLPut = postgreSQLPut;

controller.staticGet = staticGet;

controller.staticGetById = staticGetById;

controller.staticPost = staticPost;

controller.staticPut = staticPut;

controller.staticDelete = staticDelete;

controller.postgreSQLGetImage = postgreSQLGetImage;



export default controller;