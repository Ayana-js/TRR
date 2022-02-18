import axios from "axios"
import { Dispatch } from "redux"
import { HorosAction, HorosActionTypes } from "../../types/horos"

export const fetchHoros = (page = 1, limit = 10 ) => {
    return async(dispatch: Dispatch<HorosAction>) => {
        try {
            dispatch({type: HorosActionTypes.FETCH_HOROS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: { _page: page, _limit: limit}
            })
            setTimeout(() => {
                dispatch({type: HorosActionTypes.FETCH_HOROS_SUCCESS, payload: response.data})                
            }, 500)
            console.log(response.data);
        } catch (e) {
            dispatch({type: HorosActionTypes.FETCH_HOROS_ERROR, payload: 'Error'})
            
        }
    }
}
