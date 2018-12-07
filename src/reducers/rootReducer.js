import {combineReducers} from "redux";
import simpleReducer from "./simpleReducer";

import {
    createForms // optional
  } from "react-redux-form";

  const initialUserState = {
    firstName: '',
    lastName: '',
    email:'',
    phoneNo:''
  };
  

export default combineReducers({
    simpleReducer,
    ...createForms({
        user:initialUserState
    })
});