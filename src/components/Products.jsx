import React, { useContext } from 'react';

//Context
import AppContext from '../context/AppContext';

//Components
import Product from '../components/Product';

export default function Products() {
  const { state, addToCart } = useContext(AppContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="grid grid-cols-3 gap-8">
        {state.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
