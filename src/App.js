import React,{useState,useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import {Route,Switch,Redirect} from 'react-router-dom';
import Header from './components/header/header.component';
import { connect } from 'react-redux';
import SignInAndSignUp from './pages/sign-in-up/sign-in-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import setCurrentUser from './redux/actions/user-actions';


class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       currentUser:null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{

      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            
              id:snapShot.id,
              ...snapShot.data()
            
          })   
         
        })
      }

      

       setCurrentUser(userAuth)
      
    })
  }
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  
   HatsPage=()=>{
    return(

      <h1>Hats Page</h1>
    )

    
  }

  render(){
    const {currentUser} = this.props
    return (
      <div className="container">
        <Header />
        <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/shop" exact component={ShopPage}/>
        <Route path="/signin" exact render={()=>currentUser?<Redirect/>:<SignInAndSignUp/>}/>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({user})=>({
  currentUser:user.currentUser
})
const mapDispatchtoProps = dispatch =>{
  return{

    setCurrentUser : user=>dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(App);
