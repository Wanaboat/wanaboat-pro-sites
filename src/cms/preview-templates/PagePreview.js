import React from 'react'
import PropTypes from 'prop-types'
import { PageTemplate } from '../../page-templates/page'
import {
  Heading,
  Box,
  CSSReset,
  ThemeProvider
} from "@chakra-ui/core"
import theme from '../../theme/theme';

const PagePreview = ({ entry, widgetFor }) => (

<div style={{ color:"red !important"}}>
  <h1 style={{color:"red"}}>Test 1</h1>

  <ThemeProvider>
    <CSSReset />
    <Heading boxShadow="lg">
      Test
    </Heading>
  {/* <PageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  /> */}
  </ThemeProvider>
  </div>



)

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PagePreview