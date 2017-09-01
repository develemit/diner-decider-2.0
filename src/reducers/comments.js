let initialState = []

export default (state = initialState, action) => {
  switch(action.type){
    case 'FETCH_COMMENTS_PENDING':
      return state;
    case 'FETCH_COMMENTS_FULFILLED':
      return [...action.payload.data];
    case 'FETCH_COMMENTS_REJECTED':
      return state;
    case 'ADD_COMMENT_PENDING':
      return state;
    case 'ADD_COMMENT_FULFILLED':
      return [...action.payload.data];
    case 'ADD_COMMENT_REJECTED':
      return state;
    default:
      return state;
  }
}
