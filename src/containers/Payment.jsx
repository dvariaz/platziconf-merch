import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';

//Context
import AppContext from '../context/AppContext';

//Utilidades
import { calculateTotal } from '../utils/shoppingCart';

export default function Payment() {
  const history = useHistory();
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId: process.env.PP_CLIENT_ID,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data);

    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };

      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  return (
    <div>
      <div>
        <h3 className="font-semibold text-lg">Resumen del pedido:</h3>
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
          ))}
        </div>
        <PayPalButton
          paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={calculateTotal(cart)}
          onPaymentStart={() => console.log('Start Payment')}
          onPaymentSuccess={handlePaymentSuccess}
          onPaymentError={(error) => console.error(error)}
          onPaymentCancel={(data) => console.log(data)}
        />
      </div>
    </div>
  );
}
