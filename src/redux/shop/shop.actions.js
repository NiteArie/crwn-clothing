import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = (collectionsMap) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_START,
    }
}

export const fetchCollectionsSuccess = (collectionsMap) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collectionsMap,
    }
}

export const fetchCollectionsFailure = (errorMessage) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: errorMessage,
    }
}


