import { combineReducers } from 'redux'; // RootReducer ghep lai cac state duoc gui tu reducer con thong qua thang nay
import appData from './dataReducer'; // RootReducer nhan du lieu tu cac reducer con

const rootReducer = combineReducers({
    appData
})
export default rootReducer

