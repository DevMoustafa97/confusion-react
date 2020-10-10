import React from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

function RenderComments(props) {  
    let comment = null;
    if(props.comments){
      comment = props.comments.map(comment=>{
        return(
          <div key = {comment.id}>
            <p>{comment.comment}</p>
            <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
          </div>
      )
    })
    return (
    <div>
      <h3>Comments</h3>
      {comment}
    </div>
    )
  }else {
    return null
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