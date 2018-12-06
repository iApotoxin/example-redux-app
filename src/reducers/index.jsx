import { COUNTER_INCREMENT, TEXT_INSERT, TEXT_RESET } from '../actions/index';

function rootReducer(state = { count: 0, name: [] }, action) {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { ...state, count: state.count + action.val };
    case TEXT_INSERT:
      return { ...state, name: state.name.concat(action.val) }
    case TEXT_RESET:
      return {...state, name: [] }
    default:
      return state;
  }
}

export default rootReducer;