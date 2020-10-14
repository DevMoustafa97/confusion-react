import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent'
import DishDetail from './DishdetailComponent'
import Footer from './FooterComponent';
import DISHES from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotion: PROMOTIONS,
      leaders: LEADERS
    }
  }


  render() {
    const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter(dish => { return dish.featured })[0]}
          promotion={this.state.promotion.filter(promotion => { return promotion.featured })[0]}
          leader={this.state.leaders.filter(leader => { return leader.featured })[0]}
        />
      )
    }

    const DishWithId = ({ match }) => {
      console.log(match)
      return (
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
      )
    }

    const AboutWithDetails = ()=>{
      return(
        <About leaders = {this.state.leaders} />
      )
    } 
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/aboutus" component={AboutWithDetails} />
          <Route exact path="/menu" component={() => { return <Menu dishes={this.state.dishes} /> }} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
