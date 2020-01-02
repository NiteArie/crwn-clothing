import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        loading: true,
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({
                loading: false,
            })
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Switch>
                    <Route exact path={`${match.url}`}  render={props => <CollectionOverviewWithSpinner isLoading={loading} {...props} /> } /> 
                    <Route exact path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={loading} {...props} /> }/>
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    }
}


export default connect(null, mapDispatchToProps)(ShopPage);