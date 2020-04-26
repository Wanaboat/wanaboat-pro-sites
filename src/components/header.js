// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Flex, Text } from "@chakra-ui/core";
import Menu from './menu.component.js'

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
  </Flex>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
