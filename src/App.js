
import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Counter from './Counter';
import Coutrol from './Control';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Counter></Link>
              </li>
              <li>
                <Link to='/control'>Counter></Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Counter} />
          <Route exact path="/control" component={Control} />
        </div>
      </Router>
    </Provider>
  )
}

export default App;

//import React from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import store from './store';
//import Counter from './Counter';
//import Control from './Control';

//function App() {
//  return (
//    <Provider store={store}>
//      <Router>
//        <div>
//          <nav>
//            <ul>
//              <li>
//                <Link to="/">Counter</Link>
//              </li>
//              <li>
//                <Link to="/control">Control</Link>
//              </li>
//            </ul>
//          </nav>

//          <Route exact path="/" component={Counter} />
//          <Route path="/control" component={Control} />
//        </div>
//      </Router>
//    </Provider>
//  );
//}

//export default App;
