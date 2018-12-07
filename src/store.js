import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer"


const middlewares = [thunk];
const initialUserState = {
    username: ''
  };
  
export default function configStore(inititalState={}){
    return createStore(rootReducer,compose(applyMiddleware(...middlewares),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
}