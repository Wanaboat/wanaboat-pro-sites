import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
import Img from "gatsby-image"
import {
    Box,
    Heading
} from "@chakra-ui/core"

import AdsRoll from "../components/AdsRoll"

export const BoatSpecTemplate = ({
    content,
    contentComponent,
    description,
    featuredImage,
    modelID,
    title,
    helmet,
}) => {
    const PostContent = contentComponent || Content
    return (
        <Box  as="section" maxW={"1000px"} mx="auto">
            <Img fixed={featuredImage.childImageSharp.fixed} />
            <Box
                position="relative"
                zIndex="popup"
                w={"90%"}
                p={10}
                borderRadius="lg"
                bg="white"
                mx="auto"
                mt={"-80px"}>
                {helmet || ""}
                <Heading as="h1">{title}</Heading>
                <Heading
                    as="h3"
                    color="gray.700"
                    fontSize={{ xs: 16, lg: 22 }}
                    textTransform="uppercase"
                    letterSpacing="0.35rem"
                >{description}</Heading>
                {/* <img src={ featuredImage } /> */}
                {/* <Img fixed={featuredImage.fixed} /> */}
                <Box my={5}>
                    <PostContent content={content} />

                </Box>
                <Heading
                    as="h5"
                    fontSize="16px"
                >Nos occasions du moment:</Heading>

                <AdsRoll modelID={modelID} />
            </Box>
        </Box>
    )
}

BoatSpecTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
}

const BoatSpec = ({ data }) => {
    const { markdownRemark: post } = data
    // console.log( post.frontmatter.featuredImage.childImageSharp.fluid.src )
    return (
        <Layout>
            <BoatSpecTemplate
                title={post.frontmatter.title}
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                modelID={post.frontmatter.modelID}
                featuredImage={post.frontmatter.featuredImage}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
            />
        </Layout>
    )
}

BoatSpec.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default BoatSpec

export const pageQuery = graphql`
  query BoatSpecByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        modelID
        description
        featuredImage {
          childImageSharp {
            fixed(width: 1000, height: 600) {
              ...GatsbyImageSharpFixed
           }
          }
        }
      }
    }
  }
`
