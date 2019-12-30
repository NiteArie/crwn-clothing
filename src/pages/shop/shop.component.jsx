import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

const ShopPage = ({ match }) => {
    console.log(match);
    return (
        <div className="shop-page">
            <Route exact path={`${match.url}`}  render={props => <CollectionOverview {...props} /> } /> 
            <Route exact path={`${match.path}/:collectionId`} render={props => <CollectionPage {...props} /> }/>
        </div>
    );
}



export default ShopPage;