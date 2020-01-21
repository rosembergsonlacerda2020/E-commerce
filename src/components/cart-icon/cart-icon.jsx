import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cartredux/cart.actions';
import { selectCartItemsCount } from '../../redux/cartredux/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from '../../assets/image/shopping-bag.svg';
import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count"> {itemCount} </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector => ({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
