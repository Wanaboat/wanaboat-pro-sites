import React from "react"
import { AdsRoll } from "../components/"
import {
  Box,
  Heading,
  Flex,
  Link,
  Text,
  Stack,
  Spinner,
} from "@chakra-ui/core"
import Layout from "../components/Layout"

export default class AdsIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  render() {
    return (
      <Layout>
        <Stack spacing={5} maxW={"1000px"} p={{ xs: 10, lg: 20 }} mx="auto">
          <Heading as="h1">Actualités du chantier</Heading>
          <Text>
            Ce qui s'est passé dernièremenet au chantier, les réparations, les rénovations. Et quelques navigations tout de même !
          </Text>
        </Stack>
      </Layout>
    )
  }
}