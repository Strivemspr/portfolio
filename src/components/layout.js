import * as React from "react"
// import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  return (
    <section className="content-wrapper">
      <div className="container">
        <Header/>
        <main>{children}</main>
      </div>
      <Footer/>
    </section>
  )
}

export default Layout
