const putReusable = async (reqBody, reqFile) => {
    const productId = reqBody.id;
    let pieceOfQuery = '';
    let bufferContainer;
    
    const arrayOfNamesOfValues = ['type', 'brand', 'model', 'img'];
    const arrayOfNamesOfValuesIndexes = [];
    const values = [];

    if(reqFile){
        const { filename, mimetype, buffer } = reqFile;
        bufferContainer = buffer;
    }

    if(reqBody.type && reqBody.type != ""){
        arrayOfNamesOfValuesIndexes.push(0);
        values.push(reqBody.type);
    }
    if(reqBody.brand && reqBody.brand != ""){
        arrayOfNamesOfValuesIndexes.push(1);
        values.push(reqBody.brand);
    }
    if(reqBody.model && reqBody.model != ""){
        arrayOfNamesOfValuesIndexes.push(2);
        values.push(reqBody.model);
    }
    if(reqFile){
        arrayOfNamesOfValuesIndexes.push(3);
        values.push(bufferContainer);
    }

    console.log(arrayOfNamesOfValues);
    console.log(arrayOfNamesOfValuesIndexes);


    for (let i = 0; i < arrayOfNamesOfValuesIndexes.length; i++) {
        if (i != arrayOfNamesOfValuesIndexes.length - 1) {
            pieceOfQuery += `${arrayOfNamesOfValues[arrayOfNamesOfValuesIndexes[i]]} = $${i+1}, `
        } else if (i === arrayOfNamesOfValuesIndexes.length - 1) {
            pieceOfQuery += `${arrayOfNamesOfValues[arrayOfNamesOfValuesIndexes[i]]} = $${i+1} `
        }
    }

    pieceOfQuery += `where id = ${productId};`;

    const query = `UPDATE products SET ${pieceOfQuery}`;

    const cargo = [query, values];

    

    return cargo;
}

export default putReusable;