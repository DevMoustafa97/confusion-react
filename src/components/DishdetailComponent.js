import React, {Component} from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb,BreadcrumbItem,Button,Row,Label,Modal,ModalHeader,ModalBody} from 'reactstrap'
import {Link} from 'react-router-dom'
import { Control,LocalForm,Errors } from 'react-redux-form'

class RenderComments extends Component {  
constructor(props){
  super(props)
  this.state = {
    isCommentModalOpen:false
  }
}
  render(){
    // Validation functions
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length<=len);
    const minLength = (len) => (val) => (val) && (val.length>=len);
    // end of Validation function
    let comment = null;
    if(this.props.comments){
      comment = this.props.comments.map(comment=>{
        return(
          <div key = {comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
          </div>
      )
    })
   const toggleModal = ()=>{
      this.setState({
        isCommentModalOpen:!this.state.isCommentModalOpen
      })
    }
    return (
    <div>
      <h3>Comments</h3>
      {comment}
        <Button className = "m-3" outline onClick = {toggleModal}><span className = "fa fa-pen p-1 mr-2"></span>Submit Comment</Button>
      <div className="row">
      </div>
      <Modal isOpen={this.state.isCommentModalOpen} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>
              Submit Comment
          </ModalHeader>
          <ModalBody>
            <LocalForm className = "m-2">
            <Row className="mb-2">              
              <Label htmlFor="rating">Rating</Label>
              <Control.select model=".rating" name="contactType" className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
              </Control.select>
            </Row>
            
            <Row className="mb-2">
              <Label htmlFor="yourName">Your Name</Label>
              <Control.text model=".name" id="name" name="yourName"
                placeholder = "Your Name"
                className = "form-control"
                validators = {{required,minLength:minLength(3),maxLength:maxLength(15)}} />
                <Errors className = 'text-danger' model = '.name' show = "touched"
                  messages = {{
                    required:'Required',
                    minLength: 'Must Be Greater Than  tow Characters',
                    maxLength:'Must be 15 characters or less'
                  }} />
            </Row>

            <Row className="mb-2">
              <Label htmlFor="yourName">Comment</Label>
            <Control.textarea model=".commentMessage" id="commentMessage" name="commentMessage"
              rows="6"
              className="form-control" />
            </Row>
            <Row className="form-group mt-2">
                  <Button type="submit" color="primary" >
                  Submit
                  </Button>
            </Row>
            </LocalForm>
          </ModalBody>
      </Modal>
    </div>
    )
  }else {
    return null
  }
}
}
  
  function RenderDish({dish}){
      if(dish){
        return(
          <Card>
              <CardImg widht = '100%' src = {dish.image} alt={dish.name}></CardImg>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
      )
    }else {
      return null
    }
  }




  const DishDetails = (props)=> {
    return (
      <div className="container">
      <div className="row">
          <Breadcrumb>
              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
          </div>                
      </div>
      <div className="row">
          <div className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
              <RenderComments comments={props.comments} />
          </div>
      </div>
      </div>
    )

    
  }

  export default DishDetails;