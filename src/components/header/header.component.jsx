import React from 'react';
import {connect} from "react-redux";
import './header.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils'

import {ReactComponent as Logo} from '../../assets/crown.svg'


const Header = ({currentUser}) =>(

    <div className="header">
    <Link to="/" className="logo-container">
    <Logo/>
    </Link>
    
    <div className="options">
        <Link className="option" to="/shop">
            SHOP
        </Link>
        <Link className="option" to="/contact">
            CONTACT
        </Link>
        {currentUser?<div className="option" onClick={()=>auth.signOut()}>
        SIGN OUT
        </div>
        :<Link className="option" to="/signin">SIGN IN</Link>}
    </div>

    </div>
    
    )

    const mapStateToProps = (state) =>{
        return{

            currentUser:state.user.currentUser
        }
    }
export default connect(mapStateToProps,null) (Header);