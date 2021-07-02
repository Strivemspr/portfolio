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

          I believe that good design starts with an understanding of <span className="text-decoration">humans</span> and <span className="text-decoration">technology</span>, that's why I enjoy building meaningful relationships with people and improving my technical skills.<br /><br />

          Being exposed to different cultures in New Zealand has allowed me to be more opened minded and understanding of people from different countries and backgrounds.<br /><br />
                                                                                                                              
          Having the ability to <span className="text-decoration">design</span> and <span className="text-decoration">code</span> has open the doors for me to see projects more clearly from both perspectives. I enjoy both design and code equally, I love being creative and applying what I learn on a daily basis.<br /><br />

          In my free time I enjoy going to the gym, reading books, designing, coding, and drawing although I haven't had much time to draw lately, I also enjoy writing coding blog posts on DEV.to. I’d love to have more friends that are interested in design or code or to talk about anything. So, check my social media and <span className="text-decoration">connect</span> with me. 😀</p>
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