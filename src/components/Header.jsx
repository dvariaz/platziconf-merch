import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

//Context
import AppContext from '../context/AppContext';

export default function Header() {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="flex justify-between items-center h-32 py-4">
      <Link to="/">
        <h1 className="text-3xl font-semibold">PlatziConf Merch</h1>
      </Link>
      <Link to="/checkout">
        {cart.length > 0 && (
          <span className="mr-1 font-semibold">{cart.length}</span>
        )}
        <FeatherIcon icon="shopping-bag" className="m-2 inline" />
      </Link>
    </div>
  );
}
