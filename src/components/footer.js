import React from 'react'
import { FaHeart, FaBehanceSquare, FaGithub, FaDev, FaInstagram, FaTelegramPlane, FaGoodreads } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const footer = () => {
    return (
        <footer className="footer">
            <section className="social-media">
                <a href="mailto:marlonspr@hotmail.com?subject=We Would Like To Offer You (An/A) (Internship/Job) At Our Company&#38;body=You Have Been Hired Congratulations! ✔✔">marlonspr@hotmail.com</a>
                <section className="social-media__links">
                    <a className="social-media__link" href="https://www.behance.net/marlonparra"><FaBehanceSquare size={25} className="social-media__icon" /></a>
                    <a className="social-media__link" href="https://github.com/Strivemspr"><FaGithub size={25} className="social-media__icon"/></a>
                    <a className="social-media__link" href="https://dev.to/marlonry"><FaDev size={25} className="social-media__icon"/></a>
                    <a className="social-media__link" href="https://www.instagram.com/koaasy/"><FaInstagram size={25} className="social-media__icon"/></a>
                    <a className="social-media__link" href="https://www.goodreads.com/user/show/135588898-marlon"><FaGoodreads size={25} className="social-media__icon"/></a>
                    <a className="social-media__link" href="mailto:marlonspr@hotmail.com?subject=We Would Like To Offer You (An/A) (Internship/Job) At Our Company&#38;body=You Have Been Hired Congratulations! ✔✔"><FaTelegramPlane size={25} className="social-media__icon"/></a>
                </section>
            </section>
            <p>Made With <IconContext.Provider value={{color: 'red'}}><FaHeart/></IconContext.Provider> by Marlon Parra | © All Rights Reserved {new Date().getFullYear()}</p>
      </footer>
    )
}

export default footer
