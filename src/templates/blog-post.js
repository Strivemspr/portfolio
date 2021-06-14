import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Button from "../components/button"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const featuredImage = getImage(post.frontmatter.featuredImage);
  const readingTime = post.fields.readingTime.text;
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <section className="banner">
            <GatsbyImage className="banner__wrapper" imgClassName="banner__image" loading="lazy" image={featuredImage} alt="Image Banner"></GatsbyImage>
            <h2 itemProp="headline" className="banner__title">{post.frontmatter.title}</h2>
            <small className="banner__reading-time">{readingTime}</small>
          </section>
        </header>
        <section className="blog-post__content"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
      <nav className="blog-nav">
        <hr className="blog-nav__separator"/>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              // <Link to={previous.fields.slug} rel="prev">
              //   ← {previous.frontmatter.title}
              // </Link>
              <Button type="outline" isInternal={true} link={previous.fields.slug} value={`← ${previous.frontmatter.title}`}></Button>
            )}
          </li>
          <li>
            {next && (
              // <Link to={next.fields.slug} rel="next">
              //   {next.frontmatter.title} →
              // </Link>
              <Button type="filled" isInternal={true} link={next.fields.slug} value={`${next.frontmatter.title} →`}></Button>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData (
              transformOptions: {
                fit: COVER,
                cropFocus: ATTENTION,
              }
              placeholder: TRACED_SVG,
            )
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
