import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

class ShopPage extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            convertCollectionsSnapshotToMap(snapshot);
        })
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Switch>
                    <Route exact path={`${match.url}`}  render={props => <CollectionOverview {...props} /> } /> 
                    <Route exact path={`${match.path}/:collectionId`} render={props => <CollectionPage {...props} /> }/>
                </Switch>
            </div>
        );
    }
}



export default ShopPage;