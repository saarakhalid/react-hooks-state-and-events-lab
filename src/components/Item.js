import React, { useState } from 'react';

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(true);
  const cart = addToCart ? 'Add to Cart' : 'Remove From Cart';
  const cartIn = cart === 'Add to Cart' ? !'in-cart' : 'in-cart';
  return (
    <li className={cartIn}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setAddToCart(!addToCart)}>
        {cart}
      </button>
    </li>
  );
}

export default Item;