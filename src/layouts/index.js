import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// import stylesheet
import './main.scss';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Portfolio / Stephanie Zeng"
      meta={[
        { name: 'description', content: 'The portfolio site of Stephanie Zeng' },
        { name: 'keywords', content: 'ReactJS, Gatsby' },
      ]}
    />
    <Header />
      {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
