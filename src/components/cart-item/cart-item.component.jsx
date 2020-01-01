import React from 'react';

import './cart-item.styles.scss';

import { CartItemContainer, CartItemImage, ItemDetailsContainer, CartItemName} from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt="item" />
            <ItemDetailsContainer>
                <CartItemName>{name}</CartItemName>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
}

export default CartItem;