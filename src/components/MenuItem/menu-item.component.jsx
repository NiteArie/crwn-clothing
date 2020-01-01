import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer,
    MenuItemBackgroundContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <MenuItemBackgroundContainer className="background-image" imageUrl={imageUrl} />
            <ContentContainer>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle className="subtitle">SHOPS NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    );
}

export default withRouter(MenuItem);