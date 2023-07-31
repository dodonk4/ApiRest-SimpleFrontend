const deleteReusable = (reqBody) => {
    if(reqBody.model === undefined || reqBody.model === ""){
        throw new Error ("No model specified");
    }

    const productModel = reqBody.model;

    const query = `DELETE FROM products WHERE model = $1`;
    const values = [productModel];

    const cargo = [query, values];

    return cargo;
}

export default deleteReusable;