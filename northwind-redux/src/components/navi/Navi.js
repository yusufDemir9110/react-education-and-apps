import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavbarText,
    Nav,
    NavItem,
    NavLink,
   
} from 'reactstrap'
import CartSummary from '../cart/CartSummary'

export default class Navi extends Component {
    render() {
        return (
            <div>
                <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand>
      <Link to="/">
        Northwind
      </Link>
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink>
            <Link to='/saveproduct'>
              Urun Ekle
            </Link>
           
          </NavLink>
        </NavItem>
        <CartSummary/>
      </Nav>
      <NavbarText>
        Simple Text
      </NavbarText>
    </Collapse>
  </Navbar>
</div>
            </div>
        )
    }
}
