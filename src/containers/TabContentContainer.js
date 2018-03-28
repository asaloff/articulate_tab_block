import { connect } from 'react-redux';
import TabContent from '../components/TabContent';
import { removeFullPageImage } from '../actions/tabs';

const mapStateToProps = (state) => {
  return {
    selectedTab: state.selectedTab,
    fullPageImage: state.fullPageImage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFullPageImage: () => dispatch(removeFullPageImage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabContent);
