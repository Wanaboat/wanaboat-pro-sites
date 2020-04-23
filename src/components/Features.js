import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Img from "gatsby-image"

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  PseudoBox,
  SimpleGrid,
  Text,
  Stack
} from "@chakra-ui/core";

import HeroDesktopJpg from "../images/hero-desktop.jpg"

const FeatureGrid = ({ gridItems }) => (
  <Flex
    flexWrap={{ xs:"wrap", lg:"nowrap" }}
  >
    {gridItems.map(item => (
      <SimpleGrid
        borderBottom="solid 1px"
        borderBottomColor="gray.100"
        columns={{ xs: 1, lg: 2 }}>
        <Flex
          backgroundColor="gray.50"
          align="center"
          justify="center"
          p={{ xs: 10, lg: 50 }}
          position="relative"
        >
          <picture>
            <Img style={{
                zIndex:200,
                borderRadius:'4px'
              }} fixed={item.image.childImageSharp.fixed} />
          </picture>
          <Box w="360px" borderRadius={8} h="200px" bg="brand.light2" zIndex="base" position="absolute" bottom="40px" />
        </Flex>
        <Box
          p={{ xs: 10, lg: 50 }}
        >
          <Heading
            as="h3"
            fontSize={{ xs: 'base', lg: '3xl' }}
            mb={5}
            display="inline-block"
            borderBottom="solid 3px"
            borderColor="brand.light2"
          >
            {item.title}
          </Heading>
          <Text mb={5}>
            {item.text}
          </Text>
          <PseudoBox
            as={GatsbyLink}
            to={item.buttonTarget}
            backgroundColor="brand.light1"
            color="gray.700"
            letterSpacing="0.035rem"
            fontSize={13}
            fontWeight="bold"
            textTransform="uppercase"
            borderRadius={3}
            py={2}
            px={4}
          >
            {item.buttonLabel}
          </PseudoBox>
        </Box>
      </SimpleGrid>
    ))}
  </Flex>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      buttonLabel: PropTypes.string,
      buttonTarget: PropTypes.string,
    })
  ),
}

export default FeatureGrid
