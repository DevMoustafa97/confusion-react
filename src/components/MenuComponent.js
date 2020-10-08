import React, { Component } from 'react'
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'
import DishDetail from './DishdetailComponent'

export default class MenuComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedDish:null
    }
    console.log('menu constructor is invoked')
  }

  onDishSelect(dish){
    this.setState({
      selectedDish:dish
    })
    console.log(dish)
  }
  componentDidMount(){ 
    console.log('menu component did mount is invoked')
  }
  renderDish(dish){
    if(dish!==null){
      return(
         <DishDetail dish={dish}/>
        )
    }else {
      return (
        <div></div>
      )
    }
  }
  render() {

    const menu = this.props.dishes.map(dish=>{
      console.log('menu render is invoked')
      return (
        <div key={dish.id} className = 'col-12 col-md-5 m-1'>
          <Card onClick={()=>{this.onDishSelect(dish)}}>
              <CardImg width='100%' src = {dish.image} alt = {dish.name}/>
              <CardImgOverlay className = "ml-5">
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
        )
    });

    return (
      <div className="container">
        <div className="row">
            {menu}
        </div>
          {this.renderDish(this.state.selectedDish)}
      </div>
    )
  }
}