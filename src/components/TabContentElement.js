import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TabContentElement extends Component {
  constructor() {
    super();
    this.state = { visible: false };

    this.makeVisible = this.makeVisible.bind(this);
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

  render() {
    const { content } = this.props;
    let children;
    const props = {
      className: `TabContentElement ${ this.state.visible && 'visible' }`
    };

    if (content.tag === 'img') {
      children = null;
      props.src = content.content;
    } else {
      children = content.content;
    }

    return React.createElement(content.tag, props, children);
  }
}

TabContentElement.propTypes = {
  content: PropTypes.object.isRequired
};

export default TabContentElement;
