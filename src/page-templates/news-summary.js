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
    Heading,
    Stack
} from "@chakra-ui/core"
import NewsRoll from "../components/NewsRoll"

// import NewsRoll from "../components/AdsRoll"


export const NewsSummaryTemplate = ({
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
                py={{ xs: 5, lg: 20 }}
                px={{ xs:5, lg:0 }}
                mx="auto"
            >
                {helmet || ""}
                <Heading as="h1">{title}</Heading>
                <Heading
                    as="h3"
                    color="gray.700"
                    fontSize={{ xs: 16, lg: 18 }}
                    textTransform="uppercase"
                    letterSpacing="0.2rem"
                >{description}</Heading>
                <PostContent content={content} />

            </Stack>
            <Box
                my={5}
                maxW={"1000px"}
                mx="auto"
            >
                <NewsRoll />
            </Box>
        </>
    )
}

NewsSummaryTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
}

const NewsSummary = ({ data }) => {
    const { markdownRemark: post } = data
    return (
        <Layout>
            <NewsSummaryTemplate
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

NewsSummary.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default NewsSummary

export const pageQuery = graphql`
    query NewsSummary($id: String!) {
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
