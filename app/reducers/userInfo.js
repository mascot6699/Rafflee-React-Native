const initialFeedState = {
  token: '',
  company: false,
  userProfile: {
    address: '',
    national_number: '',
    email: '',
    city: '',
    country: '',
    country_code: '',
    gender: '',
    profile_picture: '',
    birth_date: '',
    lastname: '',
    firstname: '',
    phone_number_verification: false,
    region: ''
  },
  companyProfile: {
    city: '',
    national_number: '',
    address: '',
    company_name: '',
    country: '',
    region: '',
    logo: '',
    country_code: '',
    email: ''
  },


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
    case 'SET_USER_PROFILE':
      return {
          ...state,
          userProfile: action.data,
      }
    case 'SET_COMPANY_PROFILE':
      return {
          ...state,
          companyProfile: action.data,
      }
    case 'SET_PHONE_VERIFICATION':
      return {
        ...state,
        userProfile: {...userProfile, phone_number_verification: action.data}
      }
    default:
      return state
  }
}

export default UserInfo;