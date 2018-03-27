import { connect } from 'react-redux';
import TabHeader from '../components/TabHeader';
import { selectTab } from '../actions/tabs';

const mapStateToProps = (state) => {
  return {
    tabs: state.tabs,
    selectedTab: state.selectedTab
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTab: (id) => {
      dispatch(selectTab(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
