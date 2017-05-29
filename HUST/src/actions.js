import {FETCHING_DATA,FETCHING_DATA_SUCCESS,FETCHING_DATA_FAILURE} from './constants';

export function getData() {
    return {
        type: FETCHING_DATA
    }
}
export function getDataSuccess() {
    return {
        type: FETCHING_DATA_SUCCESS
    }
}
export function getDataFailure() {
    return {
        type: FETCHING_DATA_FAILURE
    }
}
export function fetchData() {}