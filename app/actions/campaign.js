import { APIROUTE } from '../constants'
import { openNotification } from '../utils/notification'

const qs = require('querystring')

function onFailed(error) {
  openNotification('warning', error)
  return {
    type: 'API_FAILED',
    error: error
  }
}

/////////////////////////////////////////////// GET_CAMPAIGN_DATA_ACTION
export function getCampaignData(id, params) {
  return apiAction({
    url: APIROUTE + `campaign/${id}/`,
    method: 'POST',
    data: qs.stringify(params),
    onSuccess: onSuccessGetCampaignData,
    onFailure: onFailed,
    label: 'GET_CAMPAIGN_DATA',
  });
}
function onSuccessGetCampaignData(data) {
  return {
    type: 'SET_CAMPAIGN_DATA',
    data: data.result_data
  }
}
/////////////////////////////////////////////// UPDATE_CAMPAIGN_DETAIL_FAVORITE_ACTION
export function updateFavorite(params, name, token) {
  return apiAction({
    url: APIROUTE + "favorites/update/",
    method: 'POST',
    data: qs.stringify(params),
    accessToken: token,
    onSuccess: (data) => onSuccessUpdateFavorite(data, name),
    onFailure: onFailed,
    label: 'UPDATE_CAMPAIGN_DETAIL_FAVORITE',
  });
}
function onSuccessUpdateFavorite(data, name) {
  return {
    type: 'CAMPAIGN_DETAIL_UPDATE_FAVORITE',
    arrname: name,
    id: data.promotion_id,
    result: data.msg
  }
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => { },
  onFailure = () => { },
  label = "",
  headersOverride = null,
  requireErrorMessage = false
}) {
  return {
    type: 'API',
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride,
      requireErrorMessage
    }
  };
}