import React, { Component } from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  Flex,
  Link } from "@chakra-ui/core";

// import logo from "../images/logo.svg"

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
        p={{ xs:0, lg:6}}
        bg="brand.dark1"
        align="center"
        justify="center"
        role="navigation"
        aria-label="main navigation"
        flexWrap={{ xs:"wrap", lg:"nowrap"}}
      >
        <Flex
          display={{ xs:(navIsOpen) ? "flex" : "none", lg:"flex"}}
          w={{ xs:"100vw", lg:"initial"}}
          h={{ xs:"calc( 100vh - 50px)", lg:"initial"}}
          position={{ xs:"fixed", lg:"initial"}}
          top="50px"
          left="0"
          bg={{ xs:"white", lg:"transparent"}}
          alignContent={{ xs:"flex-start", lg:"center"}}
          wrap={{ xs:"wrap", lg:"nowrap"}}
          p={{ xs:6, lg:0}}
        >
          { navItems.map( (item, index) => (
            <Link 
              key={`main-nav-item-${index}`}
              display="block"
              to={item.to}
              as={GatsbyLink}
              color={{ xs:"brand.dark", lg:"white"}}
              fontSize={{ xs:22, lg:12}}
              letterSpacing=".20rem"
              fontWeight="bold"
              w={{ xs:"100%", lg:"inherit"}}
              _hover={
                { color:"brand.light1", borderBottomColor:"brand.light1"}
              }
              mx={6}
              p={{ xs:4, lg:0}}
              variantColor="blue"
              borderBottom={{ xs:"solid 3px ", lg:"none"}}
              borderColor="brand.light1"
              textTransform={{ xs:"none", lg:"uppercase"}}
            >
              {item.label}
            </Link>
          )
        )}
        </Flex>
        <Flex
          display={{ xs:"flex", lg:"none"}}
          as="button"
          width="45px"
          height="45px"
          wrap="wrap"
          p={2}
          justifyContent="space-between"
          onClick={ () => { this.setState({navIsOpen: !navIsOpen} )}}
        >
          <Box w="100%" h={"3px"} bg="brand.light1" />
          <Box w="100%" h={"3px"} bg="brand.light1" />
          <Box w="100%" h={"3px"} bg="brand.light1" />
        </Flex>
      </Flex>
    )
  }
}

export default Menu
