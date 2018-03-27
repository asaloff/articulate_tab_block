import { connect } from 'react-redux';
import TabContent from '../components/TabContent';

const mapStateToProps = (state) => {
  return {
    selectedTab: state.selectedTab
  };
};

export default connect(mapStateToProps)(TabContent);
