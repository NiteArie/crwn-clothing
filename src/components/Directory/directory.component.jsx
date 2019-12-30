import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../MenuItem/menu-item.component';
import './directory.styles.scss';

const Directory = ({ sections }) => {
  let menuItems = sections.map(({id, ...sectionProps}) => {
      return <MenuItem key={id} {...sectionProps} />
  })
  return (
      <div className="directory-menu">
          {menuItems}
      </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory);