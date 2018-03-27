export function setNoScroll(component) {
  const that = this.state ? this : component;

  that.setState({
    headerFlex: false
  }, () => {
    const header = that.state.headerNode;
    if (header) {
      const needsScroll = header.scrollWidth !== header.clientWidth;
      if (!needsScroll) {
        that.setState({ headerFlex: true });
      }
    }
  });
}

export function displayScrollArrows(component) {
  const header = component.state.headerNode;
  const needsScroll = header.scrollWidth !== header.clientWidth;
  const atLeftMostPoint = header.scrollLeft === header.scrollWidth - header.clientWidth;
  const scrollPosition = header.scrollLeft;

  if (!scrollPosition && needsScroll) {
    component.setState({ leftVisible: false, rightVisible: true });
  } else if (scrollPosition && needsScroll && atLeftMostPoint) {
    component.setState({ leftVisible: true, rightVisible: false });
  } else if (scrollPosition && !atLeftMostPoint) {
    component.setState({ leftVisible: true, rightVisible: true });
  } else {
    component.setState({ leftVisible: false, rightVisible: false });
  }
}

export function hideScrollArrows(component) {
  component.setState({ leftVisible: false, rightVisible: false });
}

export function scrollLeft(component) {
  component.state.headerNode.scrollBy({
    top: 0,
    left: -400,
    behavior: 'smooth'
  });
}

export function scrollRight(component) {
  component.state.headerNode.scrollBy({
    top: 0,
    left: 400,
    behavior: 'smooth'
  });
}
