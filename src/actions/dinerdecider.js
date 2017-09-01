import axios from 'axios'

export const initGeolocate = () => {
  return {
    type: 'FETCH_GEOLOCATION',
    payload: axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCoDuNS93wLpl_DqwMDqAQNyVHnsOkaReM')
  }
}

export const getPlace = (params, data) => {
  console.log('this is getPlace action',params, data.data.location)
  let {cuisine, distance } = params
  let {lat, lng} = data.data.location
  return {
    type: 'FETCH_PLACE',
    payload: axios({
        method: "get",
        url: `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lng}&radius=${distance}&cuisines=${cuisine}`,
        headers: {
          "user-key": "5fb9a10ef535abdb7bbc830e44d17a8f"
        }
      })
  }
}
export const getRandomPlace = (data) => {
  console.log('this is getPlace action',data.data.location)
  let {lat, lng} = data.data.location
  return {
    type: 'FETCH_PLACE',
    payload: axios({
        method: "get",
        url: `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lng}&radius=${Math.floor(Math.random() * 40234) + 1610}`,
        headers: {
          "user-key": "5fb9a10ef535abdb7bbc830e44d17a8f"
        }
      })
  }
}
