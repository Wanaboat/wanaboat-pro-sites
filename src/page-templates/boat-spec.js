import React from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
import Img from "gatsby-image"
import {
    Box,
    Heading
} from "@chakra-ui/core"

import AdCardLandscape from "../components/AdCardLandscape"
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
        <Box as="section" maxW={"1000px"} p={{ xs: 10, lg: 20 }} mx="auto">
            {helmet || ""}
                <Heading as="h1">{title}</Heading>
                <Heading as="h3">{description}</Heading>
                {/* <img src={ featuredImage } /> */}
                {/* <Img fixed={featuredImage.fixed} /> */}
                <PostContent content={content} />
                Nos occasions du moment:
                <AdsRoll modelID={modelID} />
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
                // featuredImage={post.frontmatter.featuredImage.childImageSharp}
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
        featuredImage
        #featuredImage {
        #  childImageSharp {
        #    fixed(width: 800, height: 600) {
        #      ...GatsbyImageSharpFixed
        #   }
        #  }
        #}
      }
    }
  }
`
