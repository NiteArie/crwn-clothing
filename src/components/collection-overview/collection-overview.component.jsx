import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../preview-collection/preview-collection.component';

import { CollectionOverviewContainer } from './collection-overview.styles';

const CollectionOverview = ({ collections }) => {
    return (
        <CollectionOverviewContainer>
            {
                collections.map(({id, ...otherCollectionProps}) => {
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    );
                })
            }
        </CollectionOverviewContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionOverview);