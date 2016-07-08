import { connect } from 'react-redux';
import injecTapEventPlugin from 'react-tap-event-plugin';

import Landing from '../../components/Landing/Landing';


injecTapEventPlugin();

export default connect(
  state => ({
    proyects: state.proyects,
  }),
)(Landing);
