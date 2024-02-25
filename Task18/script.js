const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
  ];

  const categoryDropdown = document.getElementById('category');
  const tagCheckboxes = document.querySelectorAll('.tag');
  const productListContainer = document.getElementById('product-list');

  function renderProducts(productsToRender) {
    productListContainer.innerHTML = '';

    if (productsToRender.length == 0) {
      productListContainer.innerHTML = '<p>No products found.</p>';
      return;
    }

    productsToRender.forEach(product => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `<p>${product.name} - ${product.price}</p>`;
      productListContainer.appendChild(productElement);
    });
  }

  function applyFilters() {
    const selectedCategory = categoryDropdown.value;
    const selectedTags = Array.from(tagCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    let filteredProducts = products;

    if (selectedCategory !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    if (selectedTags.length > 0) {
      filteredProducts = filteredProducts.filter(product => product.tags.some(tag => selectedTags.includes(tag)));
    }

    renderProducts(filteredProducts);
  }

  function setupEventListeners() {
    categoryDropdown.addEventListener('change', applyFilters);

    tagCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', applyFilters);
    });
  }

  renderProducts(products);
  setupEventListeners();