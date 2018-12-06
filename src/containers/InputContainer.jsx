import { connect } from 'react-redux';
import { insert,del } from '../actions/index';
import Input from '../components/Input';

const mapDispatchToProps = {
 insert,
 del
};

export default connect(null, mapDispatchToProps)(Input);