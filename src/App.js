import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css'

import BillPage from './containers/BillContainer'
import CouponPage from './containers/CouponContainer'
import ReservationPage from './containers/ReservationContainer'

class App extends Component {
  render() {
    return (
      <Provider store={configStore()}>
        <BrowserRouter>
          <div>
            <Route exact path='/bill' component={BillPage} />
            <Route path='/coupon' component={CouponPage} />
            <Route path='/reservation' component={ReservationPage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
