import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.js';
import Shoppage from './pages/shop/Shoppage';
import NavBar from './components/navBar/NavBar.js';
import Checkout from './pages/checkout/Checkout.js'
import { GlobalStyle } from './global.styles'
import { getItems } from './redux/shop/shop.actions'




class App extends React.Component {

  componentDidMount() {
    this.props.getItems()
  }
  render() {
    return (
      <div >
        <GlobalStyle />
        <NavBar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shoppage} />
          <Route exact path='/checkout' component={Checkout} />

        </Switch>

      </div>
    );
  }
}
function mapDispatchProps(dispatch) {
  return { getItems: () => dispatch(getItems()) }
};

export default connect(null, mapDispatchProps)(App);
