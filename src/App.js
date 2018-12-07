import React, { PureComponent } from 'react';
import {connect} from "react-redux";

import { simpleAction } from "./actions/simpleAction";

//Components
import SimpleForm from "./react-redux-form/SimpleForm";

import './App.scss';

class App extends PureComponent {
  
  simpleAction = () => {
    this.props.simpleAction();
  }
  render() {
    return (
      <div className="App">
      {/* <p>{JSON.stringify(this.props)}</p> */}
      {/* <button onClick={this.simpleAction} >Test Redux Action</button> */}
      <SimpleForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction : ()=> dispatch(simpleAction())
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
