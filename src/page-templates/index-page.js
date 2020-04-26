import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink, graphql } from "gatsby"

import Seo from "../components/Head.js"

import Layout from "../components/Layout"
import Features from "../components/Features"
import BlogRoll from "../components/BlogRoll"
// import AdsRoll from "../components/AdsRoll"
import Img from "gatsby-image"

import css from "./hero.module.scss";


import HeroMobileWebp from "../images/hero-mobile.webp"
import HeroMobileJpg from "../images/hero-mobile.jpg"

import HeroDesktopWebp from "../images/hero-desktop.webp"
import HeroDesktopJpg from "../images/hero-desktop.jpg"

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

const Hero = ({ heading, subheading, chapo, phoneNumber, address, phoneNumberRaw, openingHours }) => {
  return (
    <Box
      id="home-hero"
      bg="brand.dark1"

      p={{ xs: 30, lg: 100 }}
    >
      <Stack spacing={{ xs: 6, lg: 10 }} maxW="600px">
        <Box>
          <Heading
            as="h1"
            fontSize={{ xs: 28, lg: 58 }}
            color="brand.light1"
          >{heading}</Heading>
          <Text
            color="white"
            fontSize={{ xs: 16, lg: 22 }}
            textTransform="uppercase"
            letterSpacing="0.35rem"
          >
            {subheading}
          </Text>
        </Box>

        <Text
          fontSize={{ xs: 14, lg: 18 }}
          color="white"
        >
          {chapo}
        </Text>

        <Box>
          <Text fontSize={{ xs: 12, md: 24 }} fontWeight="bold" color="white" mb={4}>Accès et contact :</Text>
          <SimpleGrid
            fontSize={{ xs: 12, lg: 18 }}
            color="white" columns={{ xs: 1, lg: 2 }}>
            <Text>
              {address}
              <br />
              {openingHours}
            </Text>
            <Box>
              <Text mb={4}>Tél : <Link href={`tel:+${phoneNumberRaw}`}>{phoneNumber}</Link></Text>
              <PseudoBox
                mt={2}
                as={GatsbyLink}
                to="/nous-trouver/"
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
                Contacts
              </PseudoBox>
            </Box>
          </SimpleGrid>
        </Box>
      </Stack>

      <Box
        position="absolute"
        right={0}
        top={"103px"}
        w="500px"
        h="500px"
      >
        <picture className={css.headerIllu}>

          <img style={{
            objectFit: "cover",
            width: "100%",
            height: "100%"
          }} src={HeroDesktopJpg} />

          <svg width="0" height="0">
            <defs>
              <clipPath id="headerIlluMask">
                <path fillRule="evenodd" clipRule="evenodd" d="M157.631 0H527V238.232L293.808 372.866C200.302 426.852 80.7358 394.814 26.75 301.308C-27.2358 207.802 4.80177 88.2358 98.308 34.25L157.631 0Z" fill="#0042DA" />
              </clipPath>
            </defs>
          </svg>
        </picture>
        <Box
                display={{ xs: "none", md: "block" }}
                position="absolute"
                top={12}
                right={"0"}
                zIndex={'base'}
            >
                <svg width="397" height="372" viewBox="0 0 397 372" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M396.475 0L108.608 0L97.7826 6.25C4.27643 60.2358 -27.7612 179.802 26.2247 273.308C80.2105 366.814 199.776 398.852 293.283 344.866L396.475 285.288V0Z" fill="#99FBF5"/>
                </svg>

            </Box>

      </Box>

    </Box>
  )
}

export const IndexPageTemplate = ({
  alertBanner,
  address,
  phoneNumber,
  phoneNumberRaw,
  openingHours,
  heading,
  subheading,
  description,
  offers,
  chapo,
}) => (
    <>
      <Flex
        bg="brand.light2"
        justify="center"
        p={1}
      >
        <Text
          textTransform="uppercase"
          fontSize={{ xs: 10, lg: "base" }}
          letterSpacing="0.15rem"
          textAlign="center"
        >
          {alertBanner}
        </Text>
      </Flex>
      <Hero
        heading={heading}
        subheading={subheading}
        chapo={chapo}
        address={address}
        openingHours={openingHours}
        phoneNumber={phoneNumber}
        phoneNumberRaw={phoneNumberRaw}
      />
      <Flex
        as="section"
        bg="#FAFAFA"
        justify="space-around"
        p={10}
        borderBottom="solid 1px"
        borderBottomColor="gray.100"
        flexWrap={{ xs: "wrap", lg: "nowrap" }}
      >
        <BlogRoll />
      </Flex>
      <Features gridItems={offers} />
    </>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  alertBanner: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(frontmatter);

  return (
    <Layout>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <IndexPageTemplate
        alertBanner={frontmatter.alertBanner}
        openingHours={frontmatter.openingHours}
        address={frontmatter.address}
        phoneNumber={frontmatter.phoneNumber}
        phoneNumberRaw={frontmatter.phoneNumberRaw}
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        chapo={frontmatter.chapo}
        offers={frontmatter.offers}
      />
    </Layout>
  )
}

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// }

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        alertBanner
        address
        openingHours
        phoneNumber
        phoneNumberRaw
        heading
        subheading
        chapo
        offers {
          title
          text
          image {
            childImageSharp {
              fixed(width: 400, height: 400) {
                ...GatsbyImageSharpFixed
             }
            }
          }
          buttonLabel
          buttonTarget
        }
      }
    }
  }
`
