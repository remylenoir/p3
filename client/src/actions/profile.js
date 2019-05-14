import service from '../utils/service';
import { GET_PROFILE, EDIT_PROFILE, CHECK_BOOKMARK, ADD_BOOKMARK_ALERT, REMOVE_BOOKMARK_ALERT} from './types';

// Get current user profile
export const getCurrentProfile_ACTION = userId => async dispatch => {
  const response = await service.get(`/users/${userId}`);
  
  dispatch({
    type: GET_PROFILE,
    payload: response.data
  });
};

// Edit current user profile
export const editCurrentProfile_ACTION = (userId, body) => async dispatch => {
  const response = await service.put(`/users/${userId}`, body, { new: true });

  dispatch({
    type: EDIT_PROFILE,
    payload: response.data
  });
};

export const checkBookmark_ACTION = alertId => dispatch => {
  dispatch({
    type: CHECK_BOOKMARK,
    payload: alertId,
  })
}

// export const bookmarkAlert_ACTION = (alertId, userId) => async dispatch => {
//   try {
//     await service.put(`/alerts/bookmark/${alertId}`);
  
//     dispatch({
//       type: BOOKMARK_ALERT,
//       payload: alertId,
//     });
//   } catch (error) {
//     console.log(error)
//   }
// };

export const addBookmarkAlert_ACTION = (alertId, userId) => async dispatch => {
  try {
    const response = await service.put(`/alerts/add/bookmark/${alertId}`);
  
    dispatch({
      type: ADD_BOOKMARK_ALERT,
      payload: response.data
    });
  } catch (error) {
    console.log(error)
  }
};

export const removeBookmarkAlert_ACTION = (alertId, userId) => async dispatch => {
  try {
    await service.put(`/alerts/remove/bookmark/${alertId}`);
  
    dispatch({
      type: REMOVE_BOOKMARK_ALERT,
    });
  } catch (error) {
    console.log(error)
  }
};