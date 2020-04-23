import React from "react"
import {Link} from "gatsby"
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    Oups, on ne trouve rien. <Link to="/">Retour à la page d'accueil</Link>
  </Layout>
)

export default NotFoundPage
