import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as helpers from '../helpers/tabHeader';

class TabHeader extends Component {
  constructor() {
    super();

    this.state = {
      leftVisible: false,
      rightVisible: false,
      headerFlex: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      helpers.setNoScroll(this);
    }, 0);

    window.addEventListener("resize", helpers.setNoScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", helpers.setNoScroll.bind(this));
  }

  render() {
    const { tabs, selectedTab, selectTab, themeStyles } = this.props;
    const { leftVisible, rightVisible, headerFlex } = this.state;

    const styles = {
      tab: {
        textAlign: 'center',
        flexGrow: 1
      }
    };

    return (
      <div
        className={`TabHeader ${headerFlex ? 'noScroll' : ''}`}
        onMouseEnter={() => helpers.displayScrollArrows(this)}
        onMouseLeave={() => helpers.hideScrollArrows(this)}
        onScroll={() => helpers.displayScrollArrows(this)}
        ref={(elem) => { this.headerNode = elem; }}
      >
        <button
          className={`btn scroll-left ${leftVisible ? 'visible' : ''}`}
          onClick={() => helpers.scrollLeft(this)}
        >
          &lt;
        </button>
        {tabs.map(tab => (
          <span
            key={tab.id}
            id={tab.id}
            className={`tab-title ${tab.id === selectedTab.id ? 'selected' : ''}`}
            style={Object.assign({}, styles.tab, tab.id !== selectedTab.id && themeStyles)}
            onClick={() => selectTab(tab.id)}
          >
            {tab.title}

          </span>
        ))}
        <button
          className={`btn scroll-right ${rightVisible ? 'visible' : ''}`}
          onClick={() => helpers.scrollRight(this)}
        >
          &gt;
        </button>
      </div>
    );
  }
}

TabHeader.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.object.isRequired,
  selectTab: PropTypes.func.isRequired,
  themeStyles: PropTypes.object.isRequired
};

export default TabHeader;
