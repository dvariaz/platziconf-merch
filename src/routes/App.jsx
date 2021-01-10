import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Context
import AppContext from '../context/AppContext';

//Components
import Layout from '../components/Layout';

//Pages
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';

//Hooks
import useInitialState from '../hooks/useInitialState';

export default function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/info" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </AppContext.Provider>
  );
}
