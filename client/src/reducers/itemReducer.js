import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: 'Leash' },
        { id: uuid(), name: 'Harness' },
        { id: uuid(), name: 'Bedding' },
        { id: uuid(), name: 'Dog Bowl' },
        { id: uuid(), name: 'Toys' }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}