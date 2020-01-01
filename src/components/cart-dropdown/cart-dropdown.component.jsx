import React from 'react';

import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';

import { withRouter } from 'react-router-dom';


import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageSpan, CartDropdownCustomButton } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length 
                ?
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} />    
                )
                :
                <EmptyMessageSpan>Your cart is empty</EmptyMessageSpan>
            }
        </CartItemsContainer>
        <CartDropdownCustomButton onClick={() => 
            {
                history.push('/checkout');
                toggleCartHidden();
            }}
            >GO TO CHECKOUT</CartDropdownCustomButton>
    </CartDropdownContainer>
)

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));