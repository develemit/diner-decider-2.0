import axios from 'axios';

export const getUser = () => {
  return {
    type: 'FETCH_USER',
    payload: axios.get('http://localhost:8000/users/1')
  }
}
