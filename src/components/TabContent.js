import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabContentElementContainer from '../containers/TabContentElementContainer';

class TabContent extends Component {
  constructor() {
    super();
    this.state = { visible: false };

    this.makeVisible = this.makeVisible.bind(this);
    this.handleImageResize = this.handleImageResize.bind(this);
  }

  componentDidMount() {
    this.makeVisible();
  }

  componentWillReceiveProps() {
    this.setState({ visible: false });
  }

  componentDidUpdate() {
    if (!this.state.visible) {
      this.makeVisible();
    }
  }

  makeVisible() {
    setTimeout(() => {
      this.setState({ visible: true });
    }, 0);
  }

  handleImageResize() {
    const { removeFullPageImage } = this.props;
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) images[i].classList.remove('selected');
    removeFullPageImage();
  }

  render() {
    const { selectedTab, fullPageImage } = this.props;

    return (
      <div className={`TabContent ${ this.state.visible ? 'visible' : '' }`}>
        {selectedTab.content.map((content, index) => (
          <TabContentElementContainer key={index} content={content} />
        ))}
        <span
          className={`backdrop ${fullPageImage ? 'cover' : ''}`}
          onClick={fullPageImage && this.handleImageResize}
        >
        </span>
      </div>
    );
  }
}

TabContent.propTypes = {
  selectedTab: PropTypes.object.isRequired,
  fullPageImage: PropTypes.bool.isRequired,
  removeFullPageImage: PropTypes.func.isRequired
};

export default TabContent;
