import React from 'react';
import {connect} from "react-redux";
import './header.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils'
import {createStructuredSelector} from 'reselect';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCurrentUser } from '../../redux/reducers/userSelector';
import { selectCartHidden } from '../../redux/reducers/cartSelector';


const Header = ({currentUser,hidden}) =>(

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
        <CartIcon/>
    </div>
    {hidden?null: <CartDropdown/>}
    </div>
    
    )

    const mapStateToProps = createStructuredSelector({
        
        currentUser:selectCurrentUser,
        hidden:selectCartHidden
    })
        
export default connect(mapStateToProps,null) (Header);