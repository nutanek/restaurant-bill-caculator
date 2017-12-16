import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.css';

import BillPage from './containers/BillContainer'

class App extends Component {
  render() {
    return (
      <Provider store={configStore()}>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={BillPage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
