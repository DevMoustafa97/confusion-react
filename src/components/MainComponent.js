import  React, {Component} from 'react';
import Header from './HeaderComponent'
import MenuComponent from './MenuComponent'
import DishDetail from './DishdetailComponent'
import Footer from './FooterComponent'
import DISHES from '../shared/dishes'

class Main extends Component {
  constructor(props) {
    super (props)

    this.state = {
      dishes:DISHES,
      selectedDish:null
    }
  }

  onDishSelect(dishId){
    this.setState({selectedDish:this.state.dishes[dishId]})
  }

  render (){
    return (
      <div>
        <Header />
        <MenuComponent dishes = {this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.selectedDish}/>
        <Footer />
      </div>
  );
}
}

export default Main;
