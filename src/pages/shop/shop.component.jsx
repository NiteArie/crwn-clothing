import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';
    
class ShopPage extends React.Component {


    componentDidMount() {
       const { fetchCollectionsStart } = this.props;
       fetchCollectionsStart(); 
    }  

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Switch>
                    <Route exact path={`${match.url}`}  
                        render={props => <CollectionOverviewContainer {...props} /> } /> 
                    <Route exact path={`${match.path}/:collectionId`} 
                        render={props => <CollectionPageContainer {...props} /> }/>
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
    }
}


export default connect(null, mapDispatchToProps)(ShopPage);