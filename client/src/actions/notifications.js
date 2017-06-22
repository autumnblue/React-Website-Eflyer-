/* eslint-disable no-unused-vars */

// ======================================================================================
/**
 * notify action
 */
export const UI_PUSH_NOTIFICATION = 'UI_PUSH_NOTIFICATION';
export const UI_POP_NOTIFICATION = 'UI_POP_NOTIFICATION';

export function showNotification(notification, ttl = consts.NOTIFICATION_TTL) {
  return (dispatch, getState) => {
    dispatch({type: UI_PUSH_NOTIFICATION, notification});
    setTimeout(() => {
      dispatch({type: UI_POP_NOTIFICATION});
    }, ttl);
  };
}
