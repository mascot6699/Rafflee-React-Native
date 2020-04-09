const initialFeedState = {
  campaignData: {
    pk: '',
    categories: null,
    winnings: null,
    release_date: '',
    type_of_promotion: '',
    description: '',
    campaign_name: '',
    number_of_eligible_people: '',
    end_date: '',
    favorite: false,
    campaign_image: '',
    poll: {},
    action_participate: []
  },
  participants: [],
  campaignWinnings: [],
  winnerArr: [],
  TOGGLE_WINNERS_MODAL: false,

}

function Campaign(state = initialFeedState, action) {
  switch (action.type) {
    case 'SET_CAMPAIGN_DATA':
      return {
        ...state,
        campaignData: action.data
      }
    case 'CAMPAIGN_DETAIL_UPDATE_FAVORITE':
      return {
        ...state,
        campaignData: { ...state.campaignData, favorite: !state.campaignData.favorite }
      }
    default:
      return state
  }
}

export default Campaign;