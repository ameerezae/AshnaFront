// import React, {Component} from 'react';
// //import './App.css';
// import Aux from './hoc/AUX';
// // function App() {
// //   return (
// //     <div className="App">
// //       <Aux>
// //         Hello
// //       </Aux>
// //     </div>
// //   );
// // }
// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Aux>
//           HELLO
//         </Aux>
//       </div> 
//     );

//   }
// }

// export default App;
import React, { Component } from 'react';
import "./bootstrap/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import SignUp from './containers/SignUp/SignUp';
class App extends Component {
  

  

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    return (
    <Router>
        <div>
          {/* <h2>آشنا</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul >
            <li><Link to={'/'} > خانه</Link></li>
            <li><Link to={'/login'} >ورود</Link></li>
            <li><Link to={'/signup'} >ثبت نام</Link></li>
          </ul>
          </nav> */}
          
          {/* <hr /> */}
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;