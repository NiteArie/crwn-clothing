import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageSpan } from './cart-dropdown.styles';

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
        <CustomButton onClick={() => 
            {
                history.push('/checkout');
                toggleCartHidden();
            }}
            >GO TO CHECKOUT</CustomButton>
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