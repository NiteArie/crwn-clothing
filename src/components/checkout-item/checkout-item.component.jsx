import React from 'react';

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, ...otherProps}) => {
    const { name, imageUrl, quantity, price } = cartItem;
    const { removeItem, decreaseQuantity, increaseQuantity } = otherProps;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
                <span className="name">{name}</span>
                <span className="quantity">
                    <div className="arrow" onClick={() => decreaseQuantity(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                    <div className="arrow" onClick={() => increaseQuantity(cartItem)}>&#10095;</div>
                </span>
                <span className="price">${price}</span>
            <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (cartItem) => dispatch(clearItemFromCart(cartItem)),
        decreaseQuantity: (cartItem) => dispatch(removeItem(cartItem)),
        increaseQuantity: (cartItem) => dispatch(addItem(cartItem)),
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);
