import React from "react";
import { connect } from "react-redux";
import "./collectionOverview.scss";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../preview-collection/CollectionPreview";
import { selectCollectionsForPreview } from "../../redux/shop/shop-selector";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
