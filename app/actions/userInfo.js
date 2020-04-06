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

/////////////////////////////////////////////// LOGIN-ACTION
export function logIn(params, rememberMe) {
  return apiAction({
    url: APIROUTE + "login/",
    method: 'POST',
    data: qs.stringify(params),
    onSuccess: (data) => onSuccessLogIn(data, rememberMe),
    onFailure: onFailed,
    label: 'LOG_IN',
    requireErrorMessage: true
  });
}
function onSuccessLogIn(data, rememberMe) {
  openNotification('success', 'Login Success')
  return {
    type: 'SET_TOKEN_COMPANY',
    data: data
  }
}
/////////////////////////////////////////////// SIGNUP-ACTION
export function signUp(params) {
  return apiAction({
    url: APIROUTE + "account/register/",
    method: 'POST',
    data: qs.stringify(params),
    onSuccess: onSuccessSignUp,
    onFailure: onFailed,
    label: 'SIGN_UP',
    requireErrorMessage: true
  });
}
function onSuccessSignUp(data) {
  openNotification('success', 'SignUp Success. Check your Email')
  return {
    type: '',
    data: ''
  }
}
/////////////////////////////////////////////// COMPANY-CONTACT-ACTION
export function companyContact(params) {
  return apiAction({
    url: APIROUTE + "company/contact-form/",
    method: 'POST',
    data: qs.stringify(params),
    onSuccess: onSuccessCompanyContact,
    onFailure: onFailed,
    label: 'COMPANY_CONTACT',
  });
}
function onSuccessCompanyContact(data) {
  openNotification('success', 'Successfully Submitted')
  return {
    type: '',
    data: ''
  }
}
/////////////////////////////////////////////// RESET-PASSWORD-REQUEST-ACTION
export function resetPasswordRequest(params) {
  return apiAction({
    url: APIROUTE + "account/password/reset/email/",
    method: 'POST',
    data: qs.stringify(params),
    onSuccess: onSuccessResetPasswordRequest,
    onFailure: onFailed,
    label: 'RESET_PASSWORD_REQUEST',
    requireErrorMessage: true
  });
}
function onSuccessResetPasswordRequest(data) {
  openNotification('success', 'Confirm')
  return {
    type: '',
    flag: ''
  }
}
/////////////////////////////////////////////// GET-USER-PROFILE-ACTION
export function getUserProfile(token) {
  return apiAction({
    url: APIROUTE + "account/profile/",
    accessToken: token,
    onSuccess: onSuccessGetUserProfile,
    onFailure: onFailed,
    label: 'GET_USER_PROFILE',
  });
}
function onSuccessGetUserProfile(data) {
  return {
    type: 'SET_USER_PROFILE',
    data: data.user_informations
  }
}
/////////////////////////////////////////////// UPDATE-USER-PROFILE-ACTION
export function updateUserProfile(params, token) {
  return apiAction({
    url: APIROUTE + "account/profile/update/",
    method: 'POST',
    data: params,
    accessToken: token,
    onSuccess: onSuccessUpdateUserProfile,
    onFailure: onFailed,
    label: 'UPDATE_USER_PROFILE',
    requireErrorMessage: true

  });
}
function onSuccessUpdateUserProfile(data) {
  openNotification('success', 'Successfully Updated')
  return {
    type: '',
    data: ''
  }
}
/////////////////////////////////////////////// GET-COMPANY-PROFILE-ACTION
export function getCompanyProfile(token) {
  return apiAction({
    url: APIROUTE + "company/profile/",
    accessToken: token,
    onSuccess: onSuccessGetCompanyProfile,
    onFailure: onFailed,
    label: 'GET_COMPANY_PROFILE',

  });
}
function onSuccessGetCompanyProfile(data) {
  return {
    type: 'SET_COMPANY_PROFILE',
    data: data.user_informations
  }
}
/////////////////////////////////////////////// UPDATE-COMPANY-PROFILE-ACTION
export function updateCompanyProfile(params, token) {
  return apiAction({
    url: APIROUTE + "company/profile/update/",
    method: 'POST',
    data: params,
    accessToken: token,
    onSuccess: onSuccessUpdateCompanyProfile,
    onFailure: onFailed,
    label: 'UPDATE_COMPANY_PROFILE',

  });
}
function onSuccessUpdateCompanyProfile(data) {
  openNotification('success', 'Successfully Updated')
  return {
    type: '',
    data: ''
  }
}
/////////////////////////////////////////////// LOGOUT-ACTION
export function logOut(token) {
  return apiAction({
    url: APIROUTE + "logout/",
    method: 'POST',
    accessToken: token,
    onSuccess: onSuccessLogOut,
    onFailure: onFailed,
    label: 'LOG_OUT',
  });
}
function onSuccessLogOut(data) {
  
  return {
    type: 'SET_TOKEN_COMPANY',
    data: { token: '', company: false }
  }
}
/////////////////////////////////////////////// SEND-SMS-ACTION
export function sendSms(params, token) {
  return apiAction({
    url: APIROUTE + "account/number/send-sms/",
    method: 'POST',
    data: qs.stringify(params),
    accessToken: token,
    onSuccess: onSuccessSendSms,
    onFailure: onFailed,
    label: 'SEND_SMS',
    requireErrorMessage: true
  });
}
function onSuccessSendSms(data) {
  openNotification('success', 'Code Sended')
  return {
    type: '',
    data: ''
  }
}
/////////////////////////////////////////////// RESEND-SMS-ACTION
export function resendSms(params, token) {
  return apiAction({
    url: APIROUTE + "account/number/send-sms/",
    method: 'POST',
    data: qs.stringify(params),
    accessToken: token,
    onSuccess: onSuccessResendSms,
    onFailure: onFailed,
    label: 'RESEND_SMS',
  });
}
function onSuccessResendSms(data) {
  openNotification('success', 'Code Sended')
  return {
    type: '',
    data: ''
  }
}
/////////////////////////////////////////////// VERIFY-PHONE-NUMBER-ACTION
export function verifyPhoneNumber(params, token) {
  return apiAction({
    url: APIROUTE + "account/number/verification/",
    method: 'POST',
    data: qs.stringify(params),
    accessToken: token,
    onSuccess: onSuccessVerifyPhoneNumber,
    onFailure: onFailed,
    label: 'VERIFY_PHONE_NUMBER',
    requireErrorMessage: true
  });
}
function onSuccessVerifyPhoneNumber(data) {
  openNotification('success', 'Verified')
  return {
    type: 'SET_PHONE_VERIFICATION',
    data: true
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