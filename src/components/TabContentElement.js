import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabContentElement extends Component {
  constructor() {
    super();
    this.handleImageResize = this.handleImageResize.bind(this);
  }

  handleImageResize(e) {
    const { fullPageImage, setFullPageImage, removeFullPageImage } = this.props;

    const classes = e.target.classList;
    classes.contains('selected') ? classes.remove('selected') : classes.add('selected');
    fullPageImage ? removeFullPageImage() : setFullPageImage();
  }

  render() {
    const { content } = this.props;
    let children;
    const props = {
      className: `TabContentElement`
    };

    if (content.tag === 'img') {
      children = null;
      props.src = content.content;
      props.onClick = this.handleImageResize;
    } else {
      children = content.content;
    }

    return React.createElement(content.tag, props, children);
  }
}

TabContentElement.propTypes = {
  content: PropTypes.object.isRequired,
  fullPageImage: PropTypes.bool.isRequired,
  setFullPageImage: PropTypes.func.isRequired,
  removeFullPageImage: PropTypes.func.isRequired
};

export default TabContentElement;
