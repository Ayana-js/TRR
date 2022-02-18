import { HorosAction, HorosActionTypes, HorosState } from "../../types/horos"

const initialState: HorosState = {
    date: '',
    horos: [],
    loading: false,
    error: null
}

export const horosReducer = (state = initialState, action: HorosAction): HorosState => {
    switch(action.type) {
        case HorosActionTypes.FETCH_HOROS: 
        return {...state, loading: true}
    case HorosActionTypes.FETCH_HOROS_ERROR: 
        return {...state, loading: false, error: action.payload}
    case HorosActionTypes.FETCH_HOROS_SUCCESS: 
        return {...state, loading: false, horos: action.payload}
        default:
            return state
    }
}