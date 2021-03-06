import React from 'react';
import { connect } from 'react-redux';
import { selecCollection, selectCollection } from '../../redux/shop/shop-selector';
import CollectionItem from '../../components/collection-itens/collection-item';
import './category.scss';

const CategoryPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title"> { title } </h2>
            <div className="items">
                { 
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CategoryPage);