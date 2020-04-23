import React from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Content, { HTMLContent } from "../components/Content"
import PreviewCompatibleImage from "../components/PreviewCompatibleImage"
import Img from "gatsby-image"

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  featuredImage,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  return (
    <section className="section">
      {helmet || ""}
      <div className="container content" style={{ maxWidth: "850px" }}>
        <h1 className="title is-size-2">{title}</h1>
        <h2 className="subtitle is-5">{description}</h2>
        {/* <img src={ featuredImage } /> */}
        {/* <Img fixed={featuredImage.fixed} /> */}
        <PostContent content={content} />
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  // console.log( post.frontmatter.featuredImage.childImageSharp.fluid.src )
  return (
    <Layout>
      <BlogPostTemplate
        title={post.frontmatter.title}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
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

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
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
