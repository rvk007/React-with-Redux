// Action creator
import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  // Bad approach: const response = await jsonplaceholder.get('/posts')
  const response = await jsonplaceholder.get('/posts');
  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data,
  });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  });
};
