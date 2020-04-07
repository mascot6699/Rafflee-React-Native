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
    case 'HOME_UPDATE_FAVORITE':
      console.log(action.arrname)
      if (action.arrname === 'hot') {
        return {
          ...state,
          hotPromotions: state.hotPromotions.map(promotion => promotion.pk === action.id ?
            { ...promotion, favorite: !promotion.favorite } : promotion
          )
        }
      }
      else if (action.arrname === 'highlight') {
        return {
          ...state,
          highlightedPromotions: state.highlightedPromotions.map(promotion => promotion.pk === action.id ?
            { ...promotion, favorite: !promotion.favorite } : promotion
          )
        }
      }
      else if (action.arrname === 'new') {
        return {
          ...state,
          newPromotions: state.newPromotions.map(promotion => promotion.pk === action.id ?
            { ...promotion, favorite: !promotion.favorite } : promotion
          )
        }
      }
      else if (action.arrname === 'bestoffer') {
        return {
          ...state,
          bestOfferPromotions: state.bestOfferPromotions.map(promotion => promotion.pk === action.id ?
            { ...promotion, favorite: !promotion.favorite } : promotion
          )
        }
      }
      else if (action.arrname === 'all') {
        return {
          ...state,
          allPromotions: state.allPromotions.map(promotion => promotion.pk === action.id ?
            { ...promotion, favorite: !promotion.favorite } : promotion
          )
        }
      }
    default:
      return state
  }
}

export default Homepage;