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
          href="https://github.com/obsaa/"
        >
          Obsaa.Co
        </Link>
        {` `}
        by
        {` `}
        <Link
          aria-label="LinkedIn Link"
          href="https://www.linkedin.com/in/obsaa/"
        >
          Obsaa A.
        </Link>
      </div>
    </footer>
  )
}

export default Footer
