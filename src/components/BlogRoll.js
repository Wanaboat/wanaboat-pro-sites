import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink, graphql, StaticQuery } from "gatsby"
import PreviewCompatibleImage from "./PreviewCompatibleImage"
import Img from "gatsby-image"

import {
  Box,
  Grid,
  Link,
  Text,
  Heading,
  Image
} from "@chakra-ui/core";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <>
        {posts &&
          posts.map(({ node: post }) => (
            <Grid
              as="article"
              bg="white"
              templateColumns="96px calc( 100% - 106px ) "
              key={post.id}
              w={{ xs:"100%", lg:"32%"}}
              boxShadow="xs"
              borderRadius="4px"
              p={4}
              mb={{ xs:4, lg:0 }}
            >
                {post.frontmatter.featuredImage ? 
                <picture>
                  <Img fixed={post.frontmatter.featuredImage.childImageSharp.fixed} />
                  {/* <Image borderRadius="5px" mr="10px" size="96px" loading="lazy" alt={post.frontmatter.title} src={post.frontmatter.featuredImage} /> */}
                </picture>
              :null}
              <Box pl="10px">
                <Heading
                  as="h4"
                  fontSize={{ xs:14, lg:16}}
                >
                <Link
                  as={GatsbyLink}
                  mb={2}
                  to={post.frontmatter.path}
                  fontSize={{ xs:18, lg:16}}
                  fontWeight="bold"
                >
                  {post.frontmatter.title}
                </Link>
                <small> le {post.frontmatter.date}</small>
                </Heading>
                <Text
                  fontSize={{ xs:14, lg:14}}
                >
                  {post.excerpt}
                </Text>
              </Box>

            </Grid>
          ))}

        {/* <div className="is-parent is-6" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Lire la suite →
                  </Link>
                </p>
              </article>
            </div> */}
        {/* ))} */}
      </>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          limit: 3
        ) {
          edges {
            node {
              excerpt(pruneLength: 80)
              id
              frontmatter {
                title
                templateKey
                date(formatString: "D/M/Y")
                featuredImage {
                  childImageSharp {
                    fixed(width: 100, height: 100) {
                      ...GatsbyImageSharpFixed
                   }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
