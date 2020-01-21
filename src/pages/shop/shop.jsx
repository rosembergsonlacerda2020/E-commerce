import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collectionsOverview/collectionsOver';
import CategoryPage from '../category/category';

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route component={CollectionsOverview}  exact path={ `${match.path}`} />
        <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
);    

export default ShopPage;