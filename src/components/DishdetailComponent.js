import React from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap'


function RenderComments({dish}) {
    let comments = null;
    if(dish){
      console.log(dish)
      comments = dish.comments.map(comment=>{
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
      {comments}
    </div>
    )
  }else {
    return null
  }
}

  function RenderDish({dish}){
      if(dish){
        return(
          <div className="col-12 col-md-5 m-1">
          <Card>
              <CardImg widht = '100%' src = {dish.image} alt={dish.name}></CardImg>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      )
    }else {
      return null
    }
  }




  const DishDetails = (props)=> {
    return (
      <div className = "container">
        <div className="row">
          {RenderDish(props)}
        <div className="col-12 col-md-5 m-1">
          {RenderComments(props)}
        </div>
      </div>
      </div>
    )

    
  }

  export default DishDetails;