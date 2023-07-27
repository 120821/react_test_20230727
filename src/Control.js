import React from 'react';
import { connect } from 'react-redux';

function Control(props) {
  return (
    <div>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>decrement</button>
    </div>
  );
}

function mapStateToProps(state) {
  return { count: state.count};
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({type: 'Increment'}),
    decrement: () => dispatch({type: 'Decrement'}),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Countrol);
//import React from 'react';
//import { connect } from 'react-redux';
//function Control(props) {
//  return (
//    <div>
//      <button onClick={props.increment}>Increment</button>
//      <button onClick={props.decrement}>Decrement</button>
//    </div>
//  );
//}
//function mapStateToProps(state) {
//  return { count: state.count };
//}

//function mapDispatchToProps(dispatch) {
//  return {
//    increment: () => dispatch({ type: 'INCREMENT' }),
//    decrement: () => dispatch({ type: 'DECREMENT' }),
//  };
//}

//export default connect(mapStateToProps, mapDispatchToProps)(Control);
