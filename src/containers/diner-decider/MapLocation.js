import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import Geolookup from 'react-geolookup';
import PassportForm from '../../components/PassportForm'
import * as userActions from '../../actions/users'

class MapLocation extends Component {

  render() {
    console.log('inside the MapLocation',this.props.result)
      let {name, price_range, location} = this.props.result
    return this.props.result.name ? (
      <div id="map">
        {this.props.result.name && <div>
          {name ? <img src={`http://logo.clearbit.com/${name.replace(/[ ,']/g, '')}.com`} alt="No Diner Logo Available"/> : <div>No Diner Logo Available</div>}<br/>
          <h4>{name}</h4>
          <p>Price Range: {'$'.repeat(price_range)}</p>
          <p>{location.address}</p>
          <a href={`https://www.google.com/maps/search/${name}+${location.address}`} target="_blank"><button>Get Directions</button></a>
          <PassportForm result={this.props.result}/>
        </div>}
      </div>
    ) : this.props.result.length > 0 ? (
      <div>No places found matching your search criteria. Up for something else?</div>
    ) :
    (
      <div>Default Message</div>
    )
  }
}

//Redux conversation between Component and Store//
function mapStateToProps (state) {
  return {
    result: state.dinerdecider
  }
}
function mapDispatchToProps(dispatch) {
  return {
      userActions: bindActionCreators(userActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MapLocation);
