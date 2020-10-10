import  React, {Component} from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent'
import Footer from './FooterComponent';
import DISHES from '../shared/dishes';
import {COMMENTS}from '../shared/comments';
import {LEADERS}from '../shared/leaders';
import {PROMOTIONS}from '../shared/promotions';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super (props)

    this.state = {
      dishes:DISHES,
      comments:COMMENTS,
      promotion:PROMOTIONS,
      leaders:LEADERS
    }
  }

  // onDishSelect(dishId){
  //   this.setState({selectedDish:this.state.dishes[dishId]})
  //   console.log(dishId)
  // }

  render (){
    const HomePage = ()=>{
      return(
        <Home dish={this.state.dishes.filter(dish=>{return dish.featured})[0] }
            promotion={this.state.promotion.filter(promotion=>{return promotion.featured})[0]}
            leader = {this.state.leaders.filter(leader=>{return leader.featured})[0]}
        />
      )
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={()=>{return <Menu dishes={this.state.dishes} /> }}/>
          <Route exact path="/contactus" component={Contact}/>
          <Redirect to="/home" />
        </Switch>
        {/* <MenuComponent dishes = {this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId)}/> */}
        {/* <DishDetail dish={this.state.selectedDish}/> */}
        <Footer />
      </div>
  );
}
}

export default Main;
