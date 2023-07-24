import { pool } from "../../db.js";

const postgreSQLPut = (req, res) => {

    const vehicleId = parseInt(req.params.id);
    const updatedVehicle = req.body;
    
    if(!vehicleId){
    
        return res.status(404).send('Vehicle not found');
    
    }else{
    
        let array = [];
        let array2 = ['id', 'wheels', 'type', 'brand', 'model'];
    
        let pieceOfQueryArray = [];
        let pieceOfQuery = '';
        
        array.push(updatedVehicle.id);
        array.push(updatedVehicle.wheels);
        array.push(updatedVehicle.type);
        array.push(updatedVehicle.brand);
        array.push(updatedVehicle.model);
        
        for (let i = 0; i < array.length; i++){
    
            if(array[i] != undefined){
    
                pieceOfQueryArray.push(`${array2[i]} = '${array[i]}'`);
    
            }   
        }
    
        for (let i = 0; i < pieceOfQueryArray.length; i++) {
    
            pieceOfQuery += pieceOfQueryArray[i];
    
            if (i < pieceOfQueryArray.length - 1) {
    
                pieceOfQuery += ',';
    
            }else{
    
                pieceOfQuery += ` where id = ${vehicleId}`;
    
            }
            
        }
    
        const query = `UPDATE vehicles SET ${pieceOfQuery}`;
        console.log(query);
    
        pool.query(query, (err, result) => {
            if (err) {
                console.error('Query error:', err);
                res.status(500).send('Error en la consulta a la base de datos.');
            } else {
                res.send('Producto actualizado correctamente.');
            }
        });
    }
        
};

export default postgreSQLPut;