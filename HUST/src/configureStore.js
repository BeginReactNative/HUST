import {createStore} from 'redux';
import app from './reducers'; // Nhan lai state tu reducer
export default function configureStore() {
    let store = createStore(app)
    return store
}