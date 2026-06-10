import React, { useState } from 'react';

const initialProducts = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Smartphone' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Monitor' },
  { id: 5, name: 'Keyboard' }
];

function ProductSearch() {
  const [search, setSearch] = useState('');

  const filteredProducts = initialProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px', borderRadius: '8px' }}>
      <h2>Task 2: Product Search</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '8px', marginBottom: '10px', width: '100%', maxWidth: '300px' }}
      />
      
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} style={{ padding: '10px', border: '1px solid #999', borderRadius: '4px' }}>
              {product.name}
            </div>
          ))
        ) : (
          <p style={{ color: 'red' }}>No Products Found</p>
        )}
      </div>
    </div>
  );
}

export default ProductSearch;
