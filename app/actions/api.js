export const apiStart = label => ({
  type: 'API_START',
  payload: label
});

export const apiEnd = label => ({
  type: 'API_END',
  payload: label
});

export const apiSuccess = label => ({
  type: 'API_SUCCESS',
  payload: `${label}_SUCCESS`
});