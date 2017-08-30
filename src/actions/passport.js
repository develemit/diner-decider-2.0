import axios from 'axios';

export const getPassport = () => {
  return {
    type: 'FETCH_PASSPORT',
    payload: axios.get('http://localhost:8000/users/passport/1')
  }
}

export const addToPassport = (value) => {
  return {
    type: 'ADD_TO_PASSPORT',
    payload: axios.post('http://localhost:8000/users/passport/1', value)
  }
}
