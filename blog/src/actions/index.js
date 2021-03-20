// Action creator
import jsonplaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  // Bad approach: const response = await jsonplaceholder.get('/posts')
  const response = await jsonplaceholder.get('/posts');
  dispatch({
    type: 'FETCH_POSTS',
    payload: response,
  });
};
