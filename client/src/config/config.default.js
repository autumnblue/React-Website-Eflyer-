/* eslint-disable max-len */

/**
 * configuration regardless of environment
 */

const API_HOST = process.env.API_HOST || (typeof location !== 'undefined' && location.protocol + '//' + location.host) || 'http://127.0.0.1:5000';

export default {

  API_HOST,
  API_URL: API_HOST + '/api/v1',

};
