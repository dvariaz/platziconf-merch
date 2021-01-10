import React from 'react';

import '../styles/components/buttons.scss';

export default function Product({ product, handleAddToCart }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <img
        className="h-48 object-contain"
        src={product.image}
        alt={product.title}
      />
      <div className="mt-2">
        <h2 className="text-lg flex justify-between font-semibold">
          {product.title}
          <span>${product.price}</span>
        </h2>
        <p className="my-4 text-sm">{product.description}</p>
        <button
          onClick={() => handleAddToCart(product)}
          type="button"
          className="btn-primary"
        >
          Comprar
        </button>
      </div>
    </div>
  );
}
