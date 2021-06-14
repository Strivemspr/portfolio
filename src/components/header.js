import * as React from "react";
import { Link } from "gatsby";
import Logo from "../images/logo.svg"

const header = () => {
    return (
        <header className="header">
            <Logo />
            <h2>Marlon Parra</h2>
            <div className="header-link-container">
                <Link className="header-link" activeClassName="active" to="/">UI/UX Projects</Link>
                <Link className="header-link" activeClassName="active" to="/dev/">Dev Projects</Link>
                <Link className="header-link" activeClassName="active" to="/about/">About Me</Link>
                <a className="header-link" href="https://dev.to/marlonry">Dev Blog</a>
            </div>
        </header>
    )
}

export default header
