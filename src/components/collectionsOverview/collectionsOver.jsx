import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../previewCollection/previewComponent';
import { selectCollections } from '../../redux/shop/shop-selector';
import './collectionsOver.scss';

const collectionOver = ({ collections }) => (
    <div className="collection-overview">
        {collections.map(({id, ...otherCollectionsProps}) => (
            <PreviewCollection key={id} {...otherCollectionsProps}/>
        ))}
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(collectionOver);