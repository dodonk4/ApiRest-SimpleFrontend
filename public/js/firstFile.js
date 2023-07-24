const rows = async () => {
    try {
        const productsContainer = document.getElementById('products-container');
        const newDiv = document.createElement('div');
        newDiv.style = 'background: #FFF; width: 100%; height: 100px; color = "#000"';
        const response = await fetch('/api/postgreSQL');
        const data = await response.json();
        fff(data);
        newDiv.innerText = JSON.stringify(cosa);
        productsContainer.appendChild(newDiv);

    } catch (error) {
        console.error(error);
    }
};

let cosa;



const fff = (data) => {
    cosa = data;
    console.log(cosa);
    return cosa;
}


rows();


// 

// 
// const newDiv = document.createElement('div');
// newDiv.style = 'background: #FFF; width: 100%; height: 100px; color = "#000"';
// newDiv.innerText = cosa;

// productsContainer.appendChild(newDiv);