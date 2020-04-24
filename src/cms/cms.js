import CMS from "netlify-cms-app"
import React from 'react'
import PropTypes from 'prop-types'

import { AboutPageTemplate } from '../page-templates/about-page'
import { BlogPostTemplate } from '../page-templates/blog-post'
// import { PagePreview } from './preview-templates/PagePreview'
import PagePreview from './preview-templates/PagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

// import "../scss/styles.scss"

// const AboutPagePreview = ({ entry, widgetFor }) => (
//     <AboutPageTemplate
//       title={entry.getIn(['data', 'title'])}
//       content={entry.getIn(['data', 'body'])}
//     />
// )

// const BlogPostPreview = ({ entry, widgetFor }) => (
//   <BlogPostTemplate
//     title={entry.getIn(['data', 'title'])}
//     description={entry.getIn(['data', 'description'])}
//     content={entry.getIn(['data', 'body'])}
//   />
// )

// const PagePreview = ({ entry, widgetFor }) => (
//   <PagePreview
//     title={entry.getIn(['data', 'title'])}
//     content={entry.getIn(['data', 'body'])}
//   />
// )
  

  
// Add Previews
CMS.registerPreviewTemplate("a-propos", AboutPagePreview)
// CMS.registerPreviewTemplate("index", IndexPagePreview)
CMS.registerPreviewTemplate("remorques-combinees-route", PagePreview)
CMS.registerPreviewTemplate("tauds-housses", PagePreview)
CMS.registerPreviewTemplate("accastillage", PagePreview)
CMS.registerPreviewTemplate("services", PagePreview)
CMS.registerPreviewTemplate("actualites", BlogPostPreview)
