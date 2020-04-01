const initialFeedState = {
  token: '',
  company: false,
}

function UserInfo(state = initialFeedState, action) {
  switch (action.type) {
    case 'INIT_STATE':
      return {
        ...state,
        [action.state]: action.data
      }
    case 'API_START':
      return {
        ...state,
        [action.payload]: true,

      };
    case 'API_END':
      return {
        ...state,
        [action.payload]: false
      };
    case 'API_SUCCESS':
      return {
        ...state,
        [action.payload]: true
      }
    case 'API_FAILED':
      return {
        ...state,
      }
    case 'SET_TOKEN_COMPANY':
      return {
        ...state,
        token: action.data.token,
        company: action.data.company
      }
    default:
      return state
  }
}

export default UserInfo;