import { FETCH_COLLAGE_LIST, FAILD_GET } from "./actionType";

/**
 * initial collage list in 0
 * based on city name we are updating the collage list.
 */
export const initialState = {
    collageList: [],
    massage: ''
}

const collageReducer = (state = initialState, action) => {
    switch (action?.type) {
        case FETCH_COLLAGE_LIST:
            return { ...state, collageList: [...action.payload] }

        case FAILD_GET:
            return { ...state, massage: action.payload }

        default: return state
    }
}

export default collageReducer;