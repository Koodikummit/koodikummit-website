import * as React from "react"
import { Scrollchor } from 'react-scrollchor';
import Navigation from "../components/Navigation";
import Main from "../sections/Main";
import AboutUs from "../sections/AboutUs";
import OurFriends from "../sections/OurFriends";
import ForCompanies from "../sections/ForCompanies";
import Faq from '../sections/Faq';
import ContactUs from '../sections/ContactUs';
import GlobalStyle from "../components/globalStyle"
import { graphql } from 'gatsby'

// markup
const IndexPage = ({ data }) => {
  const sections = data.allContentfulSection.nodes;
  
  return (
    <main>
      <GlobalStyle />
      <title>Home Page</title>
      <Navigation sections={sections} />
      <div>
        <Main />
        <AboutUs />
        <OurFriends />
        <ForCompanies />
        <Faq/>
        <ContactUs />
      </div>
    </main>
  )
}

export default IndexPage

export const pageQuery = graphql`
query MyQuery {
  allContentfulSection(sort: {order: ASC, fields: order}) {
    nodes {
      name
      order
      slug
    }
  }
}
`
