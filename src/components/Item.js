import React from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart(prevInCart => !prevInCart);
  };

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
