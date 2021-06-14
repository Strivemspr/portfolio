import * as React from "react"
import { graphql } from "gatsby"
import Button from "../components/button"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout title={siteTitle} location={location}>
      <Seo title="All posts" />
      <section className="about">
        <StaticImage
          loading="lazy"
          src="../images/me.png"
          alt="Me"
          placeholder="traced_svg"
          layout="fixed"
          objectFit="cover"
          height={500}
        />
        <div className="about__description">
          <h1>Hi! I'm <span className="text-decoration">Marlon Parra</span> 🧑👩‍💻</h1>
          <p>I'm a Front-End Developer &#38; UX/UI designer, Originally from Colombia but moved to New Zealand 8 years ago.<br /><br />

          I believe that we shouldn’t make things harder than they need to be, which is why my main aim as a designer is to help others by making the complex simple.<br /><br />
                                                                                                                              
          While I like simplicity, my background is not exactly so. I am a proud Thai &#38; Dutch "halfie" or as you would say in Thai, ลูกครึ่ง (luuk khrueng), literally meaning "half child".<br /><br />

          Being of mixed heritage and having been directly exposed to both eastern and western cultures has helped me to be more open minded and understanding of people from various backgrounds and experiences. Which, in turn has resulted in a stronger sense of empathy and desire to help people in any way I am capable of.</p>
          <Button isInternal={false} type="filled" icon="FaLink" link="../../../marlon-parra-cv.pdf" value="My CV"></Button>
        </div>
      </section>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

  }
`