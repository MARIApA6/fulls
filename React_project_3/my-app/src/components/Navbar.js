export default function Navbar() {

    return (
        <nav className="nav">
            <a href="/" className="site-title"> Site title  </a>
            <ul>

                <CustomLink href="/main">Main</CustomLink>
                <CustomLink href="/SignUp">Sign Up</CustomLink>
                <CustomLink href="/Login">Login</CustomLink>

            </ul>
        </nav>
    )
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href}{...props}>{children}</a>
        </li>
    )
}