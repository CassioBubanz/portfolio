import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Bubanz</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Serviços</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Portifólio</a>
                </li>
            </ul>

            <div className="footer__social">
                <a
                    href="https://www.instagram.com/cassio_bubanz/"
                    className="footer__social-link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bx bxl-instagram"></i>
                </a>

                <a
                    href="https://github.com/CassioBubanz"
                    className="footer__social-link"
                    target='_blank'
                    rel="noreferrer"
                >
                    <i class="bx bxl-github"></i>
                </a>

                <a
                    href="https://www.linkedin.com/in/francisco-cassiano/"
                    className="footer__social-link"
                    target='_blank'
                    rel="noreferrer"
                >
                    <i class="bx bxl-linkedin"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Cassiano Bubanz. Todos os direitos reservados.</span>
        </div>
    </footer>
  )
}

export default Footer
