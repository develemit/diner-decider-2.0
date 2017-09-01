import axios from 'axios';

export const getComments = () => {
  return {
    type: 'FETCH_COMMENTS',
    payload: axios.get('http://localhost:8000/users/passport/comments/1')
  }
}

export const addComment = (comment) => {
  console.log('this is inside the AddComment Action! - ',comment)
  return {
    type: 'ADD_COMMENT',
    payload: axios.post('http://localhost:8000/users/passport/comments/0', comment)
  }
}
