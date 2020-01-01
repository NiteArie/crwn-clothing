import React from 'react';

import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

import { connect } from 'react-redux';

import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, ...otherProps}) => {
    const { name, imageUrl, quantity, price } = cartItem;
    const { removeItem, decreaseQuantity, increaseQuantity } = otherProps;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
                <TextContainer>{name}</TextContainer>
                <QuantityContainer>
                    <div className="arrow" onClick={() => decreaseQuantity(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                    <div className="arrow" onClick={() => increaseQuantity(cartItem)}>&#10095;</div>
                </QuantityContainer>
                <TextContainer>${price}</TextContainer>
            <RemoveButtonContainer onClick={() => removeItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
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
