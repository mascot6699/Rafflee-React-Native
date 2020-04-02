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

/////////////////////////////////////////////// GET_ALL_PROMOTIONS_ACTION
export function getAllPromotions(params) {
  return apiAction({
      url: APIROUTE + "campaign/all-campaigns/",
      method: 'POST',
      data: qs.stringify(params),
      onSuccess: onSuccessGetAllPromotions,
      onFailure: onFailed,
      label: 'GET_ALL_PROMOTIONS',
  });
}
function onSuccessGetAllPromotions(data) {
  return {
      type: 'SET_ALL_PROMOTIONS',
      data: data.result_data
  }
}
/////////////////////////////////////////////// GET_HOT_PROMOTIONS_ACTION
export function getHotPromotions(params) {
  return apiAction({
      url: APIROUTE + "homepage/hot/",
      method: 'POST',
      data: qs.stringify(params),
      onSuccess: onSuccessGetHotPromotions,
      onFailure: onFailed,
      label: 'GET_HOT_PROMOTIONS',
  });
}
function onSuccessGetHotPromotions(data) {
  return {
      type: 'SET_HOT_PROMOTIONS',
      data: data.result_data
  }
}
/////////////////////////////////////////////// GET_HIGHLIGHTED_PROMOTIONS_ACTION
export function getHighlightedPromotions(params) {
  return apiAction({
      url: APIROUTE + "homepage/highlights/",
      method: 'POST',
      data: qs.stringify(params),
      onSuccess: onSuccessGetHighlightedPromotions,
      onFailure: onFailed,
      label: 'GET_HIGHLIGHTED_PROMOTIONS',
  });
}
function onSuccessGetHighlightedPromotions(data) {
  return {
      type: 'SET_HIGHLIGHTED_PROMOTIONS',
      data: data.result_data
  }
}
/////////////////////////////////////////////// GET_NEW_PROMOTIONS_ACTION
export function getNewPromotions(params) {
  return apiAction({
      url: APIROUTE + "homepage/new/",
      method: 'POST',
      data: qs.stringify(params),
      onSuccess: onSuccessGetNewPromotions,
      onFailure: onFailed,
      label: 'GET_NEW_PROMOTIONS',
  });
}
function onSuccessGetNewPromotions(data) {
  return {
      type: 'SET_NEW_PROMOTIONS',
      data: data.result_data
  }
}
/////////////////////////////////////////////// GET_BEST_PROMOTIONS_ACTION
export function getBestPromotions(params) {
  return apiAction({
      url: APIROUTE + "homepage/end-soon/",
      method: 'POST',
      data: qs.stringify(params),
      onSuccess: onSuccessGetBestPromotions,
      onFailure: onFailed,
      label: 'GET_BEST_PROMOTIONS',
  });
}
function onSuccessGetBestPromotions(data) {
  return {
      type: 'SET_BEST_PROMOTIONS',
      data: data.result_data
  }
}
/////////////////////////////////////////////// GET_CATEGORIES_ACTION
export function getCategories() {
  return apiAction({
      url: APIROUTE + "categories/",
      onSuccess: onSuccessGetCategories,
      onFailure: onFailed,
      label: 'GET_CATEGORIES',
  });
}
function onSuccessGetCategories(data) {
  return {
      type: 'SET_CATEGORIES',
      data: data.result_data
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