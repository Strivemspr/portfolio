import * as React from "react";
import { Link } from "gatsby";
import { FaCaretRight, FaGithub, FaLink, FaFigma } from 'react-icons/fa';

const Button = ({ type, value, icon, link, isInternal}) => {
    if(icon === 'FaLink') {
        icon = <FaLink/>
    } else if(icon === 'FaGithub') {
        icon = <FaGithub/>
    } else if(icon === 'FaCaretRight') {
        icon = <FaCaretRight/>
    } else if(icon === 'FaFigma') {
        icon = <FaFigma/>
    }

    console.log(link)

    return isInternal ? (
        <Link 
            itemProp="url" 
            to={link} 
            className={type ? `btn btn-${type}` : 'btn'}
        >
            <div className="icon-container">{icon}</div>
            {value}
        </Link>
    ) : (
        <a 
            href={link} 
            className={type ? `btn btn-${type}` : 'btn'}
        >
            <div className="icon-container">{icon}</div>
            {value}
        </a>
    )
}

export default Button
