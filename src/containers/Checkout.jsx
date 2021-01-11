import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

import '../styles/components/buttons.scss';

//Context
import AppContext from '../context/AppContext';

//Utilidades
import { calculateTotal } from '../utils/shoppingCart';

export default function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const total = calculateTotal(cart);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8">
            <h3>Lista de Pedidos:</h3>
            <div>
              {cart.map((product, index) => (
                <div
                  key={product.id + '-' + index}
                  className="flex justify-between items-center p-3 border-b border-gray-100 hover:bg-gray-50"
                >
                  <div className="flex justify-between flex-1">
                    <h4 className="font-semibold">{product.title}</h4>
                    <span>${product.price}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(product)}
                    type="button"
                    className="pl-2 flex items-center"
                  >
                    <FeatherIcon icon="x" className="w-4 text-gray-300" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <aside className="col-span-4">
            <h3 className="mb-4">
              Precio total: <span>${total}</span>
            </h3>
            <Link to="/checkout/info" className="btn-primary">
              Continuar pedido
            </Link>
          </aside>
        </div>
      ) : (
        <div>Sin pedidos :(</div>
      )}
    </div>
  );
}
