import React, { Component } from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Flex,
  Link } from "@chakra-ui/core";

import logo from "../images/logo.svg"

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navIsOpen: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({ navIsOpen: this.state.navIsOpen ? false : true })
  }
  render() {
    const { navIsOpen } = this.state
    const navItems = [
      {
        label:"Nous trouver",
        to:"/nous-trouver/"
      },
      {
        label:"Services",
        to:"/services/"
      },
      {
        label:"Matériel neuf",
        to:"/materiel-neuf/"
      },
      {
        label:"Bateaux",
        to:"/bateaux/"
      },
      {
        label:"Occasions",
        to:"/occasions/"
      },
      {
        label:"Actu",
        to:"/actualites/"
      }
    ]
    return (
      <Flex
        as="nav"
        p={6}
        bg="brand.dark1"
        align="center"
        justify="center"
        role="navigation"
        aria-label="main navigation"
        flexWrap={{ xs:"wrap", lg:"nowrap"}}
        w={{ xs:"100vw", lg:"initial"}}
        h={{ xs:"100vh", lg:"initial"}}
        display={{ xs:"none", lg:"flex"}}
      >
          {/* <Link className="navbar-item" to="/">
            <img src={logo} alt="Logo" />
          </Link> */}

          {/* <button
            aria-label="menu"
            aria-expanded={!navIsOpen ? false : true}
            onClick={this.handleClick}
            className="navbar-burger has-text-white has-background-dark	"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button> */}
          { navItems.map( (item, index) => (
            <Link 
              key={`main-nav-item-${index}`}
              display="block"
              to={item.to}
              as={GatsbyLink}
              color="white"
              fontWeight={{ xs:"light", lg:"regular"}}
              fontSize={{ xs:22, lg:13}}
              letterSpacing=".07rem"
              w={{ xs:"100%", lg:"inherit"}}
              borderBottom="solid 1px"
              borderBottomColor="transparent"
              _hover={
                { color:"brand.light1", borderBottomColor:"brand.light1"}
              }
              mx={6}
              variantColor="blue"
              textTransform={{ xs:"none", lg:"uppercase"}}
            >
              {item.label}
            </Link>
          )
        )}
      </Flex>
    )
  }
}

export default Menu
