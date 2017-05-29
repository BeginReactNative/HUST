import {createStore,applyMiddleware} from 'redux';
import app from './reducers'; // Nhan lai state tu reducer
import thunk from 'redux-thunk';
export default function configureStore() {
    let store = createStore(app,applyMiddleware(thunk))
    return store
}