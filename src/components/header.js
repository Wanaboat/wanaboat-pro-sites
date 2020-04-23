// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box, Flex, Text } from "@chakra-ui/core";

import HamburgerMenu from "react-hamburger-button";

import Menu from './menu.component.js'

const Burger = () => {
  return(
    <Flex display={{ xs:"flex", lg:"none"}} py="10px" px="15px" w="60px" flexWrap="wrap" h="50px" alignItems="center" justifyContent="space-around">
      <Box borderRadius="2px" backgroundColor="brand.light1" w="100%" height="3px" />
      <Box borderRadius="2px" backgroundColor="brand.light1" w="100%" height="3px" />
      <Box borderRadius="2px" backgroundColor="brand.light1" w="100%" height="3px" />
    </Flex>
  )
}

export const Header = ({ siteTitle }) => (
  <Flex
    as="header"
    bg="brand.dark1"
    h={{xs:"50px", lg:"80px"}}
    top="0"
    left="0"
    w="100vw"
    justify={{ xs:"space-between", lg:"center"}}
    align={{ xs:"center", lg:"initial"}}
    position={{xs:"fixed", lg:"initial"}}
    zIndex="modal"
  >
    <Text color="brand.light1" fontWeight="bold" pl={2} display={{ xs:"initial", lg:"none"}}>Dériveurs Services</Text>
    <Menu />
    <Burger />
  </Flex>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
