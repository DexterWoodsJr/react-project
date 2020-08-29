import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

import Product from './components/Product';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render () {
    return (
          <div className="product-wrapper">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
    );
  }
}

render (<App />, document.getElementById('root'));