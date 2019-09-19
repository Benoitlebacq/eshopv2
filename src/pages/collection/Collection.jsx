import React from "react";
import CollectionItem from "../../components/collection-items/CollectionItem";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selector";

import "./collection.scss";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
  // ici on passe le state car contrairement aux autres selecteur celui ci a besoin d 'une partie du state qui depend de l'url parameter
});

export default connect(mapStateToProps)(Collection);
