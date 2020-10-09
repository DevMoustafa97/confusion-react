import React, { Component } from 'react'
import {Navbar, NavbarBrand, Jumbotron } from 'reactstrap'
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark >
          <div className = "container">
            <NavbarBrand href = "/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="contain">
            <div className="row row-header">
              <div className="con-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>We teake inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tikel your culinary senses!</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    )
  }
}
