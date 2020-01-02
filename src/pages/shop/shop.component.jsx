import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {


    componentDidMount() {
       const { fetchCollectionsStartAsync } = this.props;
       fetchCollectionsStartAsync(); 
    }  

    render() {
        const { match, isCollectionsFetching, isCollectionsLoaded } = this.props;
        return (
            <div className="shop-page">
                <Switch>
                    <Route exact path={`${match.url}`}  
                        render={props => <CollectionOverviewWithSpinner isLoading={isCollectionsFetching} {...props} /> } /> 
                    <Route exact path={`${match.path}/:collectionId`} 
                        render={props => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} /> }/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);