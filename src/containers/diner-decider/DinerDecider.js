import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm, /*reset*/ } from 'redux-form'
import axios from 'axios'
import * as userActions from '../../actions/users'
import * as ddActions from '../../actions/dinerdecider'
import MapLocation from './MapLocation'




class DinerDecider extends Component {

  selectionCheck = () => {
    let {cuisine, distance} = this.refs
    console.log("selection Check fired", cuisine.value, distance.value)
    cuisine.value !== undefined && distance.value !== String ?
    document.getElementById("submit").disabled = false :
    document.getElementById("submit").disabled = true
  }
  whatsGoingOn = () => {
    console.log(`what's going on!?`,this.refs.cuisine.value, this.refs.distance.value)
  }

  getPlace(params){
    console.log('DinerDecider getPlace', params.cuisine, params.distance)
    axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCoDuNS93wLpl_DqwMDqAQNyVHnsOkaReM').then( data => this.props.ddActions.getPlace(params, data))

  }
  randomDecision(){
    console.log('You Chose Random!')
    axios.post('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCoDuNS93wLpl_DqwMDqAQNyVHnsOkaReM').then( data => this.props.ddActions.getRandomPlace(data))
  }

  render() {
      console.log('dd props',this.props)
      let {handleSubmit} = this.props
    return (
      <div>
        <h1 style={{marginTop: "0px"}}>Welcome To Diner Decider!</h1> <br/>
        <form onSubmit={handleSubmit(this.getPlace.bind(this))} className="buttonStyle">
          <Field id="cuisine-select" name="cuisine" component="select" type="select" ref="cuisine" className="btn btn-primary btn-lg buttonStyle"
            style={{height: "50px"}}

            onChange={() => this.selectionCheck()}>
            <option>Select Cuisine</option>
            <option value="1">American</option>
            <option value="491">Cajun</option>
            <option value="158">Caribbean</option>
            <option value="25">Chinese</option>
            <option value="45">French</option>
            <option value="134">German</option>
            <option value="156">Greek</option>
            <option value="148">Indian</option>
            <option value="55">Italian</option>
            <option value="60">Japanese</option>
            <option value="67">Korean</option>
            <option value="70">Mediterranean</option>
            <option value="73">Mexican</option>
            <option value="461">Soul</option>
            <option value="95">Thai</option>
            <option value="308">Vegetarian</option>
            <option value="99">Vietnamese</option>
          </Field><br/>

          <Field id="distance-select" name="distance" component="select" type="select" ref="distance" className="btn btn-primary buttonStyle"
            onChange={() => this.selectionCheck()}
            style={{height: "50px"}}>
            <option>Select Distance</option>
            <option value="1610">1 Mile</option>
            <option value="8050">5 Miles</option>
            <option value="16095">10 Miles</option>
            <option value="40235">25 Miles</option>
          </Field><br/>

          <button id="submit" className="btn btn-primary" disabled="true">Decide!</button><br/>
        </form>
        <button className="btn btn-primary"
          onClick={() => this.randomDecision()}>Randomize</button><br/>
        { this.props.dinerdecider.name || this.props.dinerdecider.length === 0?
                      (<MapLocation/>) :
          (<div  style={{height: "auto", width: "50%", color: "black", margin: "0px auto"}}>
            <span style={{fontSize: "40px"}}>
            No places found matching your search criteria. Up for something else?</span>
          </div>)
            }
      </div>
    )
  }
}

//Redux conversation between Component and Store//
function mapStateToProps (state) {
    return {
      dinerdecider: state.dinerdecider
    }
  }
function mapDispatchToProps(dispatch) {
  return {
      userActions: bindActionCreators(userActions, dispatch),
      ddActions: bindActionCreators(ddActions, dispatch)
  }
}

DinerDecider = reduxForm({
  // a unique identifier for this form
  form: 'dinerdecider',
})(DinerDecider)
export default connect(mapStateToProps, mapDispatchToProps)(DinerDecider);
