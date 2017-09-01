let initialState = []

export default (state = initialState, action) => {
  switch(action.type){
    case 'FETCH_GEOLOCATION_PENDING':
      return state;
    case 'FETCH_GEOLOCATION_FULFILLED':
      return [...action.payload.data];
    case 'FETCH_GEOLOCATION_REJECTED':
      return state;
    case 'FETCH_PLACE_PENDING':
      return state;
    case 'FETCH_PLACE_FULFILLED':
        console.log('Fetching places!', action.payload)
        if (action.payload.data.restaurants.length > 0 ){
        let processesing = action.payload.data.restaurants.sort( () => Math.random() - .5)
        let result = processesing.shift()
        console.log('the result is',result);
      return result.restaurant}
      else {
        return ["nothing"]
      }
    case 'FETCH_PLACE_REJECTED':
      return state;
    default:
      return state;
  }
}
