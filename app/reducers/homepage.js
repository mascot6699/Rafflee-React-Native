const initialFeedState = {
  allPromotions: [],
  hotPromotions: [],
  highlightedPromotions: [],
  newPromotions: [],
  bestOfferPromotions: [],
  categories: []
}

function Homepage(state = initialFeedState, action) {
  switch (action.type) {
      case 'SET_ALL_PROMOTIONS':
          return {
              ...state,
              allPromotions: action.data
          }
      case 'SET_HOT_PROMOTIONS':
          return {
              ...state,
              hotPromotions: action.data
          }
      case 'SET_HIGHLIGHTED_PROMOTIONS':
          return {
              ...state,
              highlightedPromotions: action.data
          }
      case 'SET_NEW_PROMOTIONS':
          return {
              ...state,
              newPromotions: action.data
          }
      case 'SET_BEST_PROMOTIONS':
          return {
              ...state,
              bestOfferPromotions: action.data
          }
      case 'SET_CATEGORIES':
          return {
              ...state,
              categories: action.data
          }
      default:
          return state
  }
}

export default Homepage;