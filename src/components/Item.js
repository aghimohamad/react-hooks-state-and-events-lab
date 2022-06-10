import React, {useState} from "react";

function Item({ name, category }) {
  const [cartAdd, setCartAdd] = useState(false);

  return (
    <li className={cartAdd ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"
      onClick={() => setCartAdd(!cartAdd)}
      >Add to Cart</button>
    </li>
  );
}

export default Item;
