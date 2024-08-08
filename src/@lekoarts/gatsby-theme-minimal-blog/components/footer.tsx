/** @jsx jsx */
import { jsx, Link } from "theme-ui"

const Footer = () => {
  
  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by . All rights reserved.
      </div>
      <div>
        <Link
          aria-label="GitHub"
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"
        >
          Obsaa.Co
        </Link>
        {` `}
        by
        {` `}
        <Link
          aria-label="Resource Blog"
          href="https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"
        >
          Obsaa
        </Link>
      </div>
    </footer>
  )
}

export default Footer
