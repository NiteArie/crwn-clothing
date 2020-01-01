import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';


import { 
    CollectionItemContainer, 
    CollectionFooterContainer, 
    ImageContainer, 
    NameSpan, 
    PriceSpan, 
    CollectionItemCustomButton 
} from './collection-item.styles';

const CollectionItem = ({item, addItem}) => {
    const { name, imageUrl, price} = item;
    return (
        <CollectionItemContainer>
            <ImageContainer imageUrl={imageUrl} >
            </ImageContainer>
            <CollectionFooterContainer>
                <NameSpan>{name}</NameSpan>
                <PriceSpan>{price}</PriceSpan>
            </CollectionFooterContainer>
            <CollectionItemCustomButton inverted
            onClick={() => addItem(item)}
            >ADD TO CART
            </CollectionItemCustomButton>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);