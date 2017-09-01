import React, { Component } from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as commentsActions from '../actions/comments'

class PassportCards extends Component {

  submitAddComment(values){
    this.props.commentsActions.addComment(values)
    console.log("Submit Comment Fired!", values);
    // this.props.history.push("/profile/passport")
    this.props.reset();
  }
  updateCommentFields(user_id, passport_id, commentVal){
    console.log('updateFields for PassportCard before',user_id,passport_id, commentVal)
  let val1 =  this.props.change("user_id", 1)
  let val2 =  this.props.change("passport_id",this.props.passport.passport_id)
  let val3 = this.props.change("comment")
  console.log('updateFields for PassportCard after',val1,val2, val3)
    return this.submitAddComment({
      user_id: val1.payload,
      passport_id: val2.payload,
      comment: this.refs.comment.value
    })
  }
  showCommentForm(){
    let x = document.getElementsByClassName('showInsertComment')
    let {index} = this.props
    console.log('this', x[index].style.display)
    return x[index].style.display = "none" ?
    x[index].style.display = "block" :
    x[index].style.display = "none"
  }
  hideCommentForm(){
    let x = document.getElementsByClassName('showInsertComment')
    let {index} = this.props
    console.log('this', x[index].style.display)
    return x[index].style.display = "block" ?
    x[index].style.display = "none" :
    x[index].style.display = "block"
  }

  render() {
    // Local styles
    let ratingStyle = {
      fontSize : "25px"
    }
    let deleteStyle = {
      float: "right"
    }
    let insertStyle = {
      display: "none"
    }

    let {handleSubmit, reset} = this.props
    let { passport, comments, deleteFromPassport, index } = this.props

    //Filters comments per passport item
    let filterComment =
      comments.filter(comment => comment.passport_id === passport.passport_id).map((result, index) => <div key={index}>
        <strong>{result.first_name} {result.last_name}</strong>
        : {result.comment}</div>)

    //Filters ratings per passport item
    let filterRating = comments.filter(comment => comment.passport_id === passport.passport_id).map((result, index) => <span key={index} style={ratingStyle}>{result.rating !== undefined ? "*".repeat(result.rating): "Not Yet Rated"}</span>)

    // Values for hidden fields in form
    let {user_id, passport_id} = this.props.comments
    console.log('comment value = ',this.refs.comment);
    let commentVal, user_idVal, passport_idVal;
    console.log('passport cards');


  return (
    <div className="passportCard">
      {passport.place_name && <img className="diner-emblem" src={`http://logo.clearbit.com/${passport.place_name.replace(/[ ,']/g, '')}.com`} alt="No Diner Logo Available"/> }
      <button style={deleteStyle} onClick={()=>deleteFromPassport(passport.passport_id)}>Delete</button>
      <h3>{ passport.place_name }</h3>
      <span>Your Rating: </span>
        { filterRating }
      <br/>
      <br/>
      <br/>
      <br/>
      <button  onClick={() => this.showCommentForm()}>Add Comment </button>

      <form style={insertStyle} className="showInsertComment" onSubmit={handleSubmit((values)=>this.updateCommentFields())}>
        <Field name="user_id" component="input" type="hidden" />
        <Field name="passport_id" component="input" type="hidden" />
        <Field name="comment" component="input" type="text" ref="comment" />
        <button onClick={() => this.hideCommentForm()}>Add</button>
      </form>

      <div className="comments comment" >Comments:
      <div className="target"> {filterComment} </div>
      </div>
    </div>
  )
}
}

function mapStateToProps (state) {
  return {
   comments: state.comments
  }
}
function mapDispatchToProps(dispatch) {
return {
    commentsActions: bindActionCreators(commentsActions, dispatch)
}
}

PassportCards = reduxForm({
  // a unique identifier for this form
  form: 'comments',
  fields: {
    user_id: this.user_id,
    passport_id: this.passport_id
  }
})(PassportCards)
export default connect(mapStateToProps, mapDispatchToProps)(PassportCards);
