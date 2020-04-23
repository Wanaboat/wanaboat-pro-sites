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
import AdCardLandscape from "../components/AdCardLandscape"
import AdCardPortraitLarge from "../components/AdCardPortraitLarge"

const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  environment: "master",
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN
});

export default class AdsIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: null,
      adSingleID: null,
      isLoading: true,
      singleAdID: null
    }
  }

  componentDidMount() {
    let _this = this;
    let query = {
      content_type: "ad",
      "fields.userId": 14,
      order: '-fields.publicationDate',
      limit: 100,
      // skip: 10 * (filteredPageNum - 1)
    }
    client.getEntries(query).then(function (results) {
      _this.setState({ ads: results.items });
      _this.setState({ isLoading: false });
    });
  }

  render() {
    const { ads, adSingleID, isLoading } = this.state
    const FullDate = (props) => {
      const date = new Date(props.date);
      return (
        date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
      )
    }
    const DateYear = (props) => {
      const date = new Date(props.date);
      return (
        date.getFullYear()
      )
    }
    const openAd = (id) => {
      this.setState({ 'adSingleID' : id })
    }
    const closeAd = () => {
      this.setState({ 'adSingleID' : null })
    }
    return (
      <Layout>
        <Stack spacing={5} maxW={"1000px"} p={{ xs: 10, lg: 20 }} mx="auto">
          <Heading as="h1">Nos bateaux d'occasion</Heading>
          <Text>
            Nous avons un grand stock d'occasion & dériveurs en particulier.
            Dériveurs Services proposent également la reprise et un service
            d'achat/vente.
          </Text>
          <Box as="section">

            {isLoading ?
              <Flex align="center" justify="center" boxShadow="xs" p={1}>
                <Spinner size="xs" color="brand.light1" mr={2} />
                <Text>Chargement en cours...</Text>
              </Flex>

            : null}
            { adSingleID ?
            <Flex justify="center">
            <AdCardPortraitLarge
              id={adSingleID}
              backAction={closeAd}
              context="export-whitelabel"
            />
          </Flex>
             : null}

            {ads && !adSingleID ?
              ads.map((edge, i) =>
                <AdCardLandscape
                  openAction={ () => { openAd(edge.sys.id) } }
                  key={edge.sys.id}
                  isInIframe={true}
                  to={edge.fields.slug}
                  name={edge.fields.name}
                  price={edge.fields.price}
                  brand={(edge.fields.refBrand) ? edge.fields.refBrand.name : null}
                  date={edge.fields.date ? <DateYear date={edge.fields.date} /> : '-'}
                  place={edge.fields.department}
                  region={edge.fields.department}
                  images={edge.fields.images}
                  publicationDate={<FullDate date={edge.fields.publicationDate} />}
                />)
              : null}
          </Box>
          <Text
            textAlign="center"
            color="gray.500"
            fontSize={13}
          >Les annonces d'occasion Dériveurs Services sont carénnées par Wanaboat.fr, <Link isExternal={true} href="https://www.wanaboat.fr/">la référence du bateaux d'occasion</Link>.</Text>
        </Stack>
      </Layout>
    )
  }
}