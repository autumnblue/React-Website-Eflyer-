import fetch from 'isomorphic-fetch';
import { LOCATION_CHANGE } from 'react-router-redux';
import consts from './consts';
import config from '../config';

export const VALID_API_METHODS = ['get', 'post', 'put', 'delete'];

/**
 * require multiple modules using Webpack's context API
 */
export const requireAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};


/**
 * call API using isomorphic-fetch
 * @param   endpoint    API endpoint
 * @param   method      HTTP method
 * @param   data        API request body in JSON format
 * @return  promise
 */
export const callApi = (endpoint, method = 'get', data) => {

  const validateMethod = method => (VALID_API_METHODS.indexOf(method.toLowerCase()) !== -1);

  const apiUrl = endpoint.startsWith('http') || endpoint.startsWith('//') ? endpoint : config.API_URL + endpoint;

  const options = {
    method: validateMethod(method) ? method : 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  return fetch(apiUrl, options)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject({ json, response });
      }
      return { json, response };
    });

};


/**
 * generate boilerplate API reducer
 * @param   actionTypes     Array of Request, Success and Failure action types
 * @return  reducer function
 */
export const createApiReducer = (actionTypes, storeResponse = false, resetOnLocationChange = true) => {

  if (!Array.isArray(actionTypes) || actionTypes.length !== 3) {
    throw new Error('API reducer generator: Expected an array of three action types.');
  }
  if (!actionTypes.every(type => typeof type === 'string')) {
    throw new Error('API reducer generator: Expected action types to be strings.');
  }

  const [requestType, successType, failureType] = actionTypes;

  return (state = {
    status: consts.API_NOT_LOADED,
    error: ''
  }, action) => {
    switch (action.type) {
      case requestType:
        return {
          status: consts.API_LOADING,
          error: ''
        };
      case successType:
        return storeResponse ? {
          status: consts.API_LOADED_SUCCESS,
          error: '',
          response: action.response
        } : {
          status: consts.API_LOADED_SUCCESS,
          error: ''
        };
      case failureType:
        return {
          status: consts.API_LOADED_ERROR,
          error: action.error
        };
      case LOCATION_CHANGE:
        if (resetOnLocationChange && action.payload && action.payload.action !== 'POP') {
          return {
            status: consts.API_NOT_LOADED,
            error: ''
          };
        }
        return state;
      default:
        return state;
    }
  };
};
