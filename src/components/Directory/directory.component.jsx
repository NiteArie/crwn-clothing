import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../MenuItem/menu-item.component';
import './directory.styles.scss';

import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => {
  let menuItems = sections.map(({id, ...sectionProps}) => {
      return <MenuItem key={id} {...sectionProps} />
  })
  return (
      <DirectoryMenuContainer>
          {menuItems}
      </DirectoryMenuContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory);