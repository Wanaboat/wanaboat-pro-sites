import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink, graphql } from "gatsby"

import Seo from "../components/Head.js"

import Layout from "../components/Layout"
import Features from "../components/Features"
import BlogRoll from "../components/BlogRoll"
// import AdsRoll from "../components/AdsRoll"

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

const Hero = ({ heading, subheading, description, phoneNumber, address, phoneNumberRaw, openingHours }) => {
  return (
    <Box
      id="home-hero"
      bg="brand.dark1"
      p={{ xs: 30, lg: 100 }}
    >
      <Stack spacing={10} w="750px">
        <Box>
          <Heading
            as="h1"
            fontSize={{ xs: 28, lg: 58 }}
            color="brand.light1"
          >{heading}</Heading>
          <Text
            color="white"
            fontSize={{ xs: 18, lg: 22 }}
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
          {description}
        </Text>

        <Box>
          <Text fontSize={{ xs:12, md:24}} fontWeight="bold" color="white" mb={4}>Accès et contact :</Text>
          <SimpleGrid color="white" columns={{xs:1, lg:2}}>
            <Box>
              {address}
              <br />
              {openingHours}
            </Box>
            <Box>
              <Text>Tél : <Link href={`tel:+${phoneNumberRaw}`}>{phoneNumber}</Link></Text>
              <PseudoBox
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
      {/* <picture>
        <source
          media="(max-width: 799px)"
          srcSet={HeroMobileWebp}
          type="image/webp"
        />
        <source
          media="(max-width: 799px)"
          srcSet={HeroMobileJpg}
          type="image/jpeg"
        />

        <source
          media="(min-width: 800px)"
          srcSet={HeroDesktopWebp}
          type="image/webp"
        />
        <source
          media="(min-width: 800px)"
          srcSet={HeroDesktopJpg}
          type="image/jpeg"
        />

        <img
          loading="lazy"
          src="images/1280x800.jpg"
          alt="Dériveurs Services, Dinard, Saint-Malo"
        />
      </picture> */}
    </Box>
  )
}

export const IndexPageTemplate = ({
  alertBanner,
  address,
  phoneNumber,
  phoneNumberRaw,
  openingHours,
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  services,
  intro,
}) => (
    <>
      <Flex
        bg="brand.light2"
        justify="center"
        p={1}
      >
        <Text
          textTransform="uppercase"
          fontSize={{ xs: "xs", lg: "base" }}
          letterSpacing="0.15rem"
        >
          {alertBanner}
        </Text>
      </Flex>
      <Hero
        heading={heading}
        subheading={subheading}
        description={description}
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
      >
        <BlogRoll />
      </Flex>
      {/* <SimpleGrid
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
            <Image
              src={HeroDesktopJpg}
              loading="lazy"
              zIndex="docked"
              borderRadius="10px"
              size="sm"
              position="relative"
              alt="Dériveurs Services, Dinard, Saint-Malo"
            />
          </picture>
          <Box w="50%" borderRadius={10} h="200px" bg="brand.light2" zIndex="base" position="absolute" bottom="40px" />
        </Flex>
        <Box
          p={{ xs: 10, lg: 50 }}
          spacing={6}
        >
          <Heading
            as="h3"
            fontSize={{ xs: 'base', lg: '3xl' }}
            mb={4}
            display="inline-block"
            borderBottom="solid 3px"
            borderColor="brand.light2"
          >
            Titre
          </Heading>
          <Text mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet viverra pharetra. Donec eu sodales urna, vitae blandit dui. Nullam hendrerit accumsan augue id feugiat. Vivamus nec convallis nisi. Vivamus non condimentum tellus. Proin eu molestie massa. Vestibulum tincidunt, tortor vitae venenatis rutrum, augue libero ullamcorper nisl, sed egestas erat lectus ut dui. Ut eu nisl semper, pretium sem ac, maximus arcu.
          </Text>
          <PseudoBox
            as={GatsbyLink}
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
            Services en détail
          </PseudoBox>
        </Box>
      </SimpleGrid>
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
            <Image
              src={HeroDesktopJpg}
              loading="lazy"
              zIndex="docked"
              borderRadius="10px"
              size="sm"
              position="relative"
              alt="Dériveurs Services, Dinard, Saint-Malo"
            />
          </picture>
          <Box w="50%" borderRadius={10} h="200px" bg="brand.light2" zIndex="base" position="absolute" bottom="40px" />
        </Flex>
        <Box
          p={{ xs: 10, lg: 50 }}
        >
          <Heading
            as="h3"
            fontSize={{ xs: 'base', lg: '3xl' }}
            mb={4}
            display="inline-block"
            borderBottom="solid 3px"
            borderColor="brand.light2"
          >
            Titre
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet viverra pharetra. Donec eu sodales urna, vitae blandit dui. Nullam hendrerit accumsan augue id feugiat. Vivamus nec convallis nisi. Vivamus non condimentum tellus. Proin eu molestie massa. Vestibulum tincidunt, tortor vitae venenatis rutrum, augue libero ullamcorper nisl, sed egestas erat lectus ut dui. Ut eu nisl semper, pretium sem ac, maximus arcu.
          </Text>
        </Box>
      </SimpleGrid> */}

<Features gridItems={services.list} />

      {/*
      {mainpitch.title}

      {mainpitch.description}

      {description}

      <picture>
        <img
          width="100%"
          loading="lazy"
          sizes="(max-width: 480px) 100vw, 400px"
          srcSet={
            "https://maps.googleapis.com/maps/api/staticmap?center=48.6333,-2.0667&zoom=6&autoscale=1&size=600x300&maptype=roadmap&key=AIzaSyC7O1XSp3BY1qkSUWKhR0hl4mOHcCIxi_U&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C48.6333,-2.0667 320w,\
                  https://maps.googleapis.com/maps/api/staticmap?center=48.6333,-2.0667&zoom=6&autoscale=1&size=600x300&maptype=roadmap&key=AIzaSyC7O1XSp3BY1qkSUWKhR0hl4mOHcCIxi_U&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C48.6333,-2.0667 800w"
          }
          src={
            "https://maps.googleapis.com/maps/api/staticmap?center=48.6333,-2.0667&zoom=6&autoscale=1&size=600x300&maptype=roadmap&key=AIzaSyC7O1XSp3BY1qkSUWKhR0hl4mOHcCIxi_U&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C48.6333,-2.0667"
          }
          alt="Dériveurs Services, Dinard, Saint-Malo"
        />
      </picture>

      <Features gridItems={services.list} />

      {/* <BlogRoll /> */}

      {/* <AdsRoll limite={3} /> */}


    </>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  alertBanner: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    services: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

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
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        services={frontmatter.services}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

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
        title
        heading
        subheading
        mainpitch {
          title
          description
        }
        services {
          list {
            title
            text
            image
            buttonLabel
            buttonTarget
          }
        }
        description
      }
    }
  }
`
