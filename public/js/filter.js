const filter = () => {
  const products = document.querySelectorAll('.products');

  const searchBar = document.getElementById('search-bar');
  searchBar.addEventListener('input', searchProductByTyping);

  function searchProductByTyping() {

    const searchTerm = searchBar.value.trim().toLowerCase();

    for (const product of products) {
      const type = product.querySelector('.product-type').textContent.toLowerCase();
      const model = product.querySelector('.product-model').textContent.toLowerCase();
      const brand = product.querySelector('.product-brand').textContent.toLowerCase();

      const showProduct = type.startsWith(searchTerm) || model.startsWith(searchTerm) || brand.startsWith(searchTerm);

      product.style.display = showProduct ? 'block' : 'none';

    }
  }
}
