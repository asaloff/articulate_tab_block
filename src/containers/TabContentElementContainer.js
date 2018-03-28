import { connect } from 'react-redux';
import TabContentElement from '../components/TabContentElement';
import { setFullPageImage, removeFullPageImage } from '../actions/tabs';

const mapStateToProps = (state) => {
  return {
    fullPageImage: state.fullPageImage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFullPageImage: () => dispatch(setFullPageImage()),
    removeFullPageImage: () => dispatch(removeFullPageImage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabContentElement);
