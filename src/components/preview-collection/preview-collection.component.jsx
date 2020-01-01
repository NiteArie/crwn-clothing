import React from 'react';
import './preview-collection.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

import {
    CollectionPreviewContainer,
    CollectionPreviewTitle,
    CollectionPreviewItemsContainer
} from './preview-collection.styles'

const CollectionPreview = ({ title, items }) => {
    return (
        <CollectionPreviewContainer>
            <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
            <CollectionPreviewItemsContainer>
                {
                    items   
                    .filter((item, index) => index < 4)
                    .map((item) => {
                        return <CollectionItem key={item.id} item={item} /> 
                    })
                }
            </CollectionPreviewItemsContainer>
        </CollectionPreviewContainer>
    );
}


export default CollectionPreview;