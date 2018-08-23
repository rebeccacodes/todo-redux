import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c618_martin';

export function getAllListData() {
    const resp = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return {
        type: types.GET_ALL_LIST_DATA,
        payload: resp
    };
}
