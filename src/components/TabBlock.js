import React from 'react';
import '../styles/tab-block.css';
import TabHeaderContainer from '../containers/TabHeaderContainer';
import TabContentContainer from '../containers/TabContentContainer';

const TabBlock = () => {
  return (
    <div className="TabBlock col-lg-8 offset-lg-2 card">
      <TabHeaderContainer />
      <TabContentContainer />
    </div>
  );
};

export default TabBlock;
