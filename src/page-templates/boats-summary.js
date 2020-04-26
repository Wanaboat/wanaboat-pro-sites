import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
// import Img from "gatsby-image"
import {
    Box,
    Heading,
    Stack
} from "@chakra-ui/core"
import BoatsRoll from "../components/BoatsRoll"

// import BoatsRoll from "../components/AdsRoll"


export const BoatsSummaryTemplate = ({
    content,
    contentComponent,
    description,
    title,
    helmet,
}) => {
    const PostContent = contentComponent || Content
    return (
        <>
            <Stack
                spacing={{ xs: 4, lg: 8 }}
                as="section"
                maxW={"1000px"}
                px={{ xs:"2rem", lg:"5rem" }}
                py={{ xs:"2rem", lg:"5rem" }}
                mx="auto"
            >
                {helmet || ""}
                <Heading as="h1">{title}</Heading>
                <Heading
                    as="h3"
                    color="gray.700"
                    fontSize={{ xs: 16, lg: 18 }}
                    textTransform="uppercase"
                    letterSpacing="0.35rem"
                >{description}</Heading>
                <PostContent content={content} />

            </Stack>
            <Box
                px={{ xs:"2rem", lg:"5rem" }}
                maxW={"1000px"}
                mx="auto"
            >
                <BoatsRoll />
            </Box>
        </>
    )
}

BoatsSummaryTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
}

const BoatsSummary = ({ data }) => {
    const { markdownRemark: post } = data
    return (
        <Layout>
            <BoatsSummaryTemplate
                title={post.frontmatter.title}
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
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

BoatsSummary.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default BoatsSummary

export const pageQuery = graphql`
  query BoatsSummary($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`