import { pool } from "../../../db.js";

const postgreSQLPut = (req, res, next) => {

    if(!req.body.id){
        throw new Error ("Product Id not provided");
    }

    if(req.body.type === "" && req.body.brand === "" && req.body.model === ""){
        throw new Error ("No parameters given to update");
    }

    const productId = req.body.id;
    const updatedproduct = req.body;
    
    let array = [];
    let array2 = ['type', 'brand', 'model'];

    let pieceOfQueryArray = [];
    let pieceOfQuery = '';
    
    array.push(updatedproduct.type);
    array.push(updatedproduct.brand);
    array.push(updatedproduct.model);
    
    for (let i = 0; i < array.length; i++){
        if(array[i].length != 0){
            pieceOfQueryArray.push(`${array2[i]} = '${array[i]}'`);
        }   
    }

    for (let i = 0; i < pieceOfQueryArray.length; i++) {

        pieceOfQuery += pieceOfQueryArray[i];

        if (i < pieceOfQueryArray.length - 1) {

            pieceOfQuery += ',';

        }else{

            pieceOfQuery += ` where id = ${productId}`;

        }
        
    }

    const query = `UPDATE products SET ${pieceOfQuery}`;

    pool.query(query, (err, result) => {

        try {

            if(result.rowCount === 0){
                throw new Error ("Product not found");
            }

            if (err) {
                console.error('Query error:', err);
                res.status(500).send('Error en la consulta a la base de datos.');
            } else {
                req.flash('mensaje', 'Producto Actualizado');
                res.redirect('/userTools');
            }
        } catch (error) {
            next(error);
        }

        
    });
    
        
};

export default postgreSQLPut;