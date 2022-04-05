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

// markup
const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />
      <title>Home Page</title>
      <Navigation />
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
