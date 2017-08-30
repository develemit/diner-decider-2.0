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
    return (
      <div id="map">
        {this.props.result.name && <div>
          <h4>{name}</h4>
          <p>Price Range: {'$'.repeat(price_range)}</p>
          <p>{location.address}</p>
          <PassportForm result={this.props.result}/>
        </div>}
      </div>
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
