import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

import Seo from "../components/Head.js"

import {
  Box,
  Heading,
  Button,
  Flex,
  Stack,
  Link } from "@chakra-ui/core";

export const AboutPageTemplate = ({
  title,
  description,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content
  const defaultOptions = {
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: true,
    draggableCursor: "default",
    draggingCursor: "move",
  }
  return (
    <Box>
        <Stack
          spacing="4"
          maxWidth="900px"
          mx="auto"
          my={{ xs:4, lg:20}}
          p={{ xs:4, lg:0}}
        >
          <Heading as="h1">{title}</Heading>
          <Heading
            as="h3"
            fontWeight="ligth"
            fontSize={{ xs:16, lg:22}}
            >{description}</Heading>
        </Stack>
        <Box
          maxW="1280px"
          mx="auto"
          my={4}
        >
          <LoadScript
            id="script-loader"
            googleMapsApiKey="AIzaSyC7O1XSp3BY1qkSUWKhR0hl4mOHcCIxi_U"
          >
            <GoogleMap
              id="model-map"
              mapContainerStyle={{
                height: "400px",
                width: "100%",
              }}
              zoom={8}
              center={{
                lat: 48.621368,
                lng: -2.07034,
              }}
              defaultOptions={defaultOptions}
            >
              <Marker
                position={{
                  lat: 48.621368,
                  lng: -2.07034,
                }}
                id={1}
                label="Dériveurs Services"
                label-color="white"
                labelStyle={{ size: "10px" }}
                title="Dériveurs Services"
                clickable={true}
              />
            </GoogleMap>
          </LoadScript>
        </Box>
        <Box
          maxWidth="900px"
          mx="auto"
          my={{ xs:5, lg:20}}
          p={{ xs:4, lg:0}}
        >
          <PageContent content={content} />
        </Box>
      </Box>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Seo title="test" description="description" />
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
