import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.js';
import Shoppage from './pages/shop/Shoppage';
import NavBar from './components/navBar/NavBar.js';
import Checkout from './pages/checkout/Checkout.js'

// const Watchpage = () => {
//   return (
//     <div>
//       <h1>Hats Page</h1>
//     </div>
//   )

// }

function App() {
  return (
    <div >
      <NavBar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage} />
        <Route exact path='/checkout' component={Checkout} />

      </Switch>
    </div>
  );
}

export default App;
