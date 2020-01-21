import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Homepage from './pages/homepage/homepage';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SingInUp from './pages/singin/singinup';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/userSelectors';
import Checkout from './pages/checkout/checkout';
import './App.css';

class App extends Component {
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if(userAuth) {
       const userRef = await createUserProfileDocument(userAuth);
       
       userRef.onSnapshot(snapShot => {
         setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
         });
       });
     }

     setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={ () => this.props.currentUser ? (<Redirect to='/' />) : (<SingInUp />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
