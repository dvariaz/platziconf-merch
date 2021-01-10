import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import '../styles/components/forms.scss';

//Context
import AppContext from '../context/AppContext';

export default function Information() {
  const history = useHistory();
  const { state } = useContext(AppContext);
  const { register, handleSubmit, watch, errors } = useForm();

  const { cart } = state;

  const onSubmit = (data) => {
    console.log(data);
    const buyer = data;
    // addToBuyer(buyer);
    // history.push('/checkout/success');
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8">
        <h2 className="mb-4 font-semibold text-xl">Información de contacto</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Nombre completo"
            name="name"
            autoComplete="off"
            className="input-field"
            ref={register}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            name="email"
            autoComplete="off"
            className="input-field"
            ref={register}
          />
          <input
            type="text"
            placeholder="Dirección"
            name="address"
            autoComplete="off"
            className="input-field"
            ref={register}
          />
          <input
            type="text"
            placeholder="Casa/Apartamento"
            name="name"
            autoComplete="off"
            className="input-field"
            ref={register}
          />
          <input
            type="text"
            placeholder="Ciudad"
            name="city"
            autoComplete="off"
            className="input-field"
            ref={register}
          />
          <input
            type="text"
            placeholder="Estado"
            name="state"
            autoComplete="off"
            className="input-field"
            ref={register}
          />
          <input
            type="text"
            placeholder="País"
            name="country"
            autoComplete="off"
            className="input-field"
            ref={register}
          />
          <input
            type="text"
            placeholder="Código postal"
            name="zipcode"
            autoComplete="off"
            className="input-field"
            ref={register}
          />
          <input
            type="text"
            placeholder="Teléfono"
            name="phone"
            autoComplete="off"
            className="input-field"
            ref={register}
          />
          <div className="flex justify-between py-4">
            <Link to="/checkout">Regresar</Link>
            <button type="submit">Pagar</button>
          </div>
        </form>
      </div>
      <div className="col-span-4 px-4">
        <h3 className="pb-4 font-semibold text-md">Pedido</h3>
        <div>
          {cart.map((product) => (
            <div className="flex justify-between">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
