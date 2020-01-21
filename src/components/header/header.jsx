import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/image/crown.svg';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import './header.scss';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../../components/cart/cart';
import { selectCartHidden } from '../../redux/cartredux/cart.selectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" exact to="singin">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ?
            null
            :
            <CartDropdown /> 
        }
    </div>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
