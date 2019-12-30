import React from 'react';

import { clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, removeItem}) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
                <span className="name">{name}</span>
                <span className="quantity">{quantity}</span>
                <span className="price">${price}</span>
            <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (cartItem) => dispatch(clearItemFromCart(cartItem))
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);
