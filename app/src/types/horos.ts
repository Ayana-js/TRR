export interface HorosState {
    date: string,
    horos: any[],
    loading: boolean,
    error: null | string
}

export enum HorosActionTypes {
    FETCH_HOROS = 'FETCH_HOROS',
    FETCH_HOROS_SUCCESS = 'FETCH_HOROS_SUCCESS',
    FETCH_HOROS_ERROR = 'FETCH_HOROS_ERROR'
}

interface FetchHorosAction {
    type: HorosActionTypes.FETCH_HOROS
}

interface FetchHorosErrorAction {
    type: HorosActionTypes.FETCH_HOROS_SUCCESS,
    payload: any[]
}

interface FetchHorosSuccessAction {
    type: HorosActionTypes.FETCH_HOROS_ERROR,
    payload: string
}

export type HorosAction = FetchHorosAction | FetchHorosErrorAction | FetchHorosSuccessAction 
