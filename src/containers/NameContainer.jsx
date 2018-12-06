
import { connect } from 'react-redux';
import Name from '../components/Name';

const mapStateToProps = state => ({
   name: state.name
});

export default connect(mapStateToProps)(Name);