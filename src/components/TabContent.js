import React from 'react';
import PropTypes from 'prop-types';
import TabContentElement from './TabContentElement';

const TabContent = ({ selectedTab }) => {
  return (
    <div className="TabContent">
      {selectedTab.content.map((content, index) => (
        <TabContentElement key={index} content={content} />
      ))}
    </div>
  );
};

TabContent.propTypes = {
  selectedTab: PropTypes.object.isRequired
};

export default TabContent;
