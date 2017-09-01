import axios from 'axios';

export const getPassport = () => {
  return {
    type: 'FETCH_PASSPORT',
    payload: axios.get('http://localhost:8000/users/passport/1')
  }
}

export const addToPassport = (value) => {
  console.log('this is the add to passport Action', value)
  return {
    type: 'ADD_TO_PASSPORT',
    payload: axios.post('http://localhost:8000/users/passport/1', {
      user_id: value.user_id.payload,
      name: value.name.payload,
      location: value.location.payload
    })
  }
}

export const deleteFromPassport = (place) => {
    console.log('this is the delte from passport Action', place)
  return {
    type: 'DELETE_FROM_PASSPORT',
    payload:
          axios.delete('http://localhost:8000/users/passport/comments/'+place).then(() =>
          axios.delete('http://localhost:8000/users/passport/'+ place))
  }
}
