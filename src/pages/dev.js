import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "../components/button"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Dev Projects" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Dev Projects" />
      <ol className="postsContainer">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const image = getImage(post.frontmatter.featuredImage)
          const readingTime = post.fields.readingTime.text
          const buttons = post.frontmatter.buttons;

          //to delete
          console.log(buttons);
          const isInternal = buttons.some(button => button.isInternal);
          console.log(isInternal);

          const tools = post.frontmatter.tools;

          return (
            <li className="post" key={post.fields.slug}>
              
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <div className="post-text-container">
                    <header>
                      <div className="post-header">
                        <h2>
                          <span itemProp="headline">{title}</span>
                        </h2>
                        <section className="post-tools">
                          {tools && tools.map((tool, index) => {
                            const toolImage = getImage(tool);
                            return (
                              <GatsbyImage loading="eager" className="post-image" image={toolImage} alt="Image" key={index} />
                            )
                          })}
                        </section>
                      </div>
                      <small>{readingTime}</small>
                    </header>
                    
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>

                    <section className='post-links-container'>
                      {buttons && buttons.map((button, index) => {
                        return (
                          <Button type={button.type} key={index} isInternal={button.isInternal} link={button.isInternal ? post.fields.slug : button.link} value={button.value} icon={button.icon}/>
                        )
                      })}
                      {/* <Button type="outline" isInternal={false} link="https://github.com/Strivemspr/Natours" value="Source" icon="FaLink"/>
                      <Button type="outline" isInternal={false} link="https://github.com/Strivemspr/Natours" value="Source" icon="FaGithub"/> */}
                    </section>
                  </div>
                  <div className="post-image-container">
                    <GatsbyImage loading="lazy" image={image} alt="Porfolio-Image"/>
                  </div>
                </article>
             
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "development" } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
          readingTime {
           text
          } 
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          buttons {
            icon
            isInternal
            link
            type
            value
          }
          tools {
            childImageSharp {
              gatsbyImageData (
                layout: FIXED,
                height: 20,
                transformOptions: {
                  fit: COVER,
                  cropFocus: ATTENTION,
                }
                placeholder: TRACED_SVG,
              )
            }
          }
          featuredImage {
            childImageSharp {
              gatsbyImageData (
                placeholder: TRACED_SVG,
              )
            }
          }
        }
      }
    }
  }
`
