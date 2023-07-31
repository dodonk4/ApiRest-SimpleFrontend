import { pool } from "../db.js";


const putReusable = async (reqBody) => {
    const productId = reqBody.id;
    const updatedproduct = reqBody;
    
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

    return query;
}

export default putReusable;