

const products = () =>{
    fetch('/products-from-database')
    .then(response => response.json())
    .then(data => {

        const productsContainer = document.getElementById('products-container');

        for (let i = 0; i < data.length; i++) {
            const row = data[i];
            const mimetype = 'image/jpeg';
            const imgBase64 = btoa(row.img.data);
            console.log(row);
            const product = document.createElement('div');
            product.id = `product-${i}`;
            product.class = `products`;
            // console.log(row.img.data.toString('base64'));
            // console.log(typeof row.img);
            product.innerHTML = `<img src="data:${mimetype};base64,${imgBase64}" class="product-images">`;
            productsContainer.appendChild(product);
    }



    })
}

products();


// for (let i = 0; i < queryResult.rows.length; i++) {
//     const row = queryResult.rows[i];
//     const imgBase64 = row.img.toString('base64');
//     const product = document.createElement('div');
//     product.id = `product-${i}`;
//     product.class = `products`;
//     product.innerHTML = `<img src="${imgBase64}" class="product-images">`;
//     productsContainer.appendChild(product);
// }