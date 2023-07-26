
const products = async () =>{
    fetch('/products-from-database')
    .then(response => response.json())
    .then(data => {

        const base64EncodeUint8Array = (uint8Array) => {
            let binaryString = '';
            const len = uint8Array.length;
            for (let i = 0; i < len; i++) {
              binaryString += String.fromCharCode(uint8Array[i]);
            }
            return btoa(binaryString);
          }

        const productsContainer = document.getElementById('products-container');

        for (let i = 0; i < data.length; i++) {
            const row = data[i];
            const mimetype = 'image/jpeg';
            // const imgBase64 = row.img.toString('base64');
            const imgBase64 = base64EncodeUint8Array(row.img.data);
            console.log(row.img);
            const product = document.createElement('div');
            product.id = `product-${i}`;
            product.className = `products`;
            // console.log(btoa(row.img.data));
            // console.log(typeof row.img);
            product.innerHTML = `
            <img src="data:${mimetype};base64,${imgBase64}" class="product-images">
            <div class="texts-inside-product">Lorem Ipsum</div>
            <div class="texts-inside-product">Lorem Ipsum</div>
            <div class="texts-inside-product">Lorem Ipsum</div>
            `;
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