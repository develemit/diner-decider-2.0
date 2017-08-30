let initialState = []

export default (state = initialState, action) => {
  switch(action.type){
    case 'FETCH_USER_PENDING':
      return state;
    case 'FETCH_USER_FULFILLED':
      return [...action.payload.data];
    case 'FETCH_USER_REJECTED':
      return state;
    default:
      return state;
  }
}
