import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import introPage from './components/introPage';
import destinationPage from './components/destinationPage';
import matchedRoutes from './components/matchedRoutes';
import allRoutes from './components/allRoutes';
import specificBusInfo from './components/specificBusInfo';
import cardPayment from './components/choosePaymentMethod/cardPayment';
import addPaymentMethod from './components/addPaymentMethod';
import samsungPay from './components/choosePaymentMethod/samsungPay';
import googlePay from './components/choosePaymentMethod/googlePay';
import applePay from './components/choosePaymentMethod/applePay';
import payPal from './components/choosePaymentMethod/payPal';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route component={introPage} path='/' exact />
        <Route component={destinationPage} path='/destinationPage' />
        <Route component={matchedRoutes} path='/matchedRoutes' />
        <Route component={allRoutes} path='/allRoutes' />
        <Route component={specificBusInfo} path='/specificBusInfo' />
        <Route component={addPaymentMethod} path='/addPaymentMethod' />
        <Route component={cardPayment} path='/cardPayment' />
        <Route component={samsungPay} path='/samsungPay' />
        <Route component={googlePay} path='/googlePay' />
        <Route component={applePay} path='/applePay' />
        <Route component={payPal} path='/payPal' />
      </Switch>
    </Router>
  );
}

export default App;
