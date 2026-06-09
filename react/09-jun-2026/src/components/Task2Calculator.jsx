import React, { useState } from 'react';

const Task2Calculator = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [total, setTotal] = useState(null);

  const calculateTotal = (e) => {
    e.preventDefault();
    const calculatedTotal = Number(price) * Number(quantity);
    setTotal(calculatedTotal);
  };

  return (
    <div>
      <h2>Task 2: Price Calculator</h2>
      <form onSubmit={calculateTotal}>
        <div>
          <label>Product Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Price: </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Quantity: </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Calculate</button>
      </form>
      
      {total !== null && (
        <div>
          <p>Total: {total}</p>
          {total > 5000 && <p><strong>Discount Eligible!</strong></p>}
        </div>
      )}
      <hr />
    </div>
  );
};

export default Task2Calculator;
