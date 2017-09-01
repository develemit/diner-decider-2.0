let initialState = []

export default (state = initialState, action) => {
  switch(action.type){
    case 'FETCH_PASSPORT_PENDING':
      return state;
    case 'FETCH_PASSPORT_FULFILLED':
      return [...action.payload.data];
    case 'FETCH_PASSPORT_REJECTED':
      return state;
    case 'ADD_TO_PASSPORT_PENDING':
      return state;
    case 'ADD_TO_PASSPORT_FULFILLED':
      return [...action.payload.data];
    case 'ADD_TO_PASSPORT_REJECTED':
      return state;
    case 'DELETE_FROM_PASSPORT_PENDING':
      return state;
    case 'DELETE_FROM_PASSPORT_FULFILLED':
      console.log('delete reducer payload',action.payload);
      return [...action.payload.data];
    case 'DELETE_FROM_PASSPORT_REJECTED':
      return state;
    default:
      return state;
  }
}
