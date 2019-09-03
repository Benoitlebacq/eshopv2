import React from "react";
import "./directory-style.scss";
import MenuItem from "../menu-items/MenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory-selector";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(section => {
        return (
          <MenuItem
            key={section.id}
            title={section.title}
            image={section.imageUrl}
            size={section.size}
            linkUrl={section.linkUrl}
          />
        );
      })}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
