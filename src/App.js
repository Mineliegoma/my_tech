import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.js';
import Shoppage from './pages/shop/Shoppage'
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
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
