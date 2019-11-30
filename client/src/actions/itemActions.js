import axios from 'axios';
import {
    GET_ITEMS,
    ADD_ITEMS,
    DELETE_ITEMS,
    ITEMS_LOADING
} from './types';

export const getItems = () => {
    return async (dispatch) => {
        dispatch(setItemsLoading());
        const res = await axios.get('/api/items');

        dispatch({
            type: GET_ITEMS,
            payload: res.data
        });
        //console.log(res);
    };
};

export const deleteItem = (id) => {
    return async (dispatch) => {
        const res = await axios.delete(`/api/items/${id}`);

        dispatch({
            type: DELETE_ITEMS,
            payload: id
        })
    };
};

export const addItem = (item) => {
    return async (dispatch) => {
        const res = await axios.post('/api/items', item);

        dispatch({
            type: ADD_ITEMS,
            payload: res.data
        })
    };
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
};