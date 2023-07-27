import React from 'react';
import { connect } from 'react-redux';
function Counter(props) {
  return (
    <div>
      <h1>Counter: {props.count}</h1>
      <button onClick={props.increment}>Increment增加</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {count: state.count};
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//// src/Counter.js
//import React from 'react';
//import { connect } from 'react-redux';

//function Counter(props) {
//  return (
//    <div>
//      <h1>Counter: {props.count}</h1>
//      <button onClick={props.increment}>Increment</button>
//    </div>
//  );
//}

//function mapStateToProps(state) {
//  return { count: state.count };
//}

//function mapDispatchToProps(dispatch) {
//  return {
//    increment: () => dispatch({ type: 'INCREMENT' }),
//  };
//}

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
