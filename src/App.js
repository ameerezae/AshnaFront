import React, { Component } from 'react';
import "./bootstrap/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import SignUp from './containers/SignUp/SignUp';
import charityDetail from './containers/charityProfile/charityDetails';
import charityPost from './containers/charityProfile/charityPost';
import charityEdit from './containers/charityProfile/charityEditProfile';
import Search from './containers/Search/search';
import BenefactorDetails from "./containers/benefactorProfile/benefactorDetails";
import PersonSignUp from './containers/SignUp/SignUpPerson';
import BenefactorEdit from './containers/benefactorProfile/benefactorEdit';
import TimeLine from './containers/benefactorProfile/timeLine';
import Followings from './containers/benefactorProfile/followings';
import CharityViewDetail from './containers/charityProfile/charityViewDetail';
import CharityViewPosts from './containers/charityProfile/charityViewPosts';
import Followers from './containers/charityProfile/Followers';
class App extends Component {

  render() {
    return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/Ashna' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/signup/charity' component={SignUp} />
              <Route path='/profile/charity/posts/' component={charityPost}/>
              <Route path='/profile/charity/edit/:Name' component={charityEdit}/>
              <Route path='/profile/charity/followers' component={Followers}/>
              <Route path='/profile/charity/:Name' component={charityDetail}/>
              <Route path='/signup/person' component={PersonSignUp} />
              <Route path='/profile/person/edit/:Name' component={BenefactorEdit}/>
              <Route path='/profile/person/followings' component={Followings}/>
              <Route path ='/profile/person/timeline' component = {TimeLine}/>
              <Route path ="/profile/person/:Name" component = {BenefactorDetails} />
              <Route path='/charities/:Name/posts/' component={CharityViewPosts}/>
              <Route path='/charities/:Name' component={CharityViewDetail}/>
              <Route path='/charities/' component={Search}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
