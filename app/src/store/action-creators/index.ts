import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo' 
import * as HorosActionCreators from './horos'

export default {
    ...UserActionCreators,
    ...TodoActionCreators,
    ...HorosActionCreators
}