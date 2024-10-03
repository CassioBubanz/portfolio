import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Serviços</h2>
        <span className="section__subtitle">O que posso oferecer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                    Desenvolvimento <br /> Full-Stack
                    </h3>
                </div>

                <span className="services__button" onClick={() => 
                toggleTab(1)}>
                    Ver Mais
                    <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? 'services__modal active-modal'
                : 'services__modal'}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close">
                        </i>

                        <h3 className="services__modal-title">Desenvolvimento Web e <br /> Aplicações Full-Stack</h3>
                        <p className="services__modal-description">
                        Criação de aplicações completas, desde a interface de usuário até o backend.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Desenvolvimento de aplicações web interativas e dinâmicas utilizando frameworks modernos como Vue.js e React.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Integração de APIs RESTful e GraphQL para comunicação eficiente entre frontend e backend.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Implementação de backends robustos com Node.js, Express, Django, e bancos de dados relacionais ou NoSQL.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Desenvolvimento de funcionalidades personalizadas, como sistemas de autenticação, gerenciamento de dados e dashboards interativos.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Otimização de performance e segurança em aplicações web e mobile.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                    Desenvolvimento <br /> Mobile
                    </h3>
                </div>

                <span onClick={() => toggleTab(2)}
                className="services__button">
                    Ver Mais
                    <i className="uil uil-arrow-right
                    services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? 'services__modal active-modal'
                : 'services__modal'}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil 
                        uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Desenvolvimento de <br /> Aplicativos Mobiles
                        </h3>
                        <p className="services__modal-description">
                        Criação de aplicativos móveis nativos e cross-platform com foco em performance, 
                        usabilidade e integração com serviços externos.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Desenvolvimento de aplicativos móveis cross-platform utilizando React Native.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Integração com APIs, sistemas de pagamento e notificações push para maior funcionalidade.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Criação de experiências móveis otimizadas, garantindo responsividade e desempenho em dispositivos Android.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Soluções personalizadas para startups e empresas, adaptando aplicativos às necessidades de mercado.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Publicação e manutenção de aplicativos na loja da Google Play.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Desenvolvimento <br /> Front-End
                    </h3>
                </div>

                <span onClick={() => toggleTab(3)} className="services__button">
                    Ver Mais
                    <i className="uil uil-arrow-right services__button-icon">
                    </i>
                </span>

                <div className={toggleState === 3 ? 'services__modal active-modal'
                : 'services__modal'}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)}  
                        className="uil uil-times services__modal-close">
                        </i>

                        <h3 className="services__modal-title">Desenvolvimento Front-End e <br /> Interfaces Dinâmicas</h3>
                        <p className="services__modal-description">
                        Criação de interfaces modernas, interativas e responsivas, utilizando as mais recentes tecnologias de front-end para garantir uma experiência de usuário fluida e otimizada.
                        </p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Desenvolvimento de aplicações front-end com Vue.js, React, e outras bibliotecas JavaScript, criando interfaces dinâmicas e interativas.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Integração com APIs e serviços externos, para garantir que seu front-end funcione de forma harmoniosa com backends e APIs.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Uso de boas práticas de performance para garantir que o site seja rápido e eficiente.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Manutenção contínua e suporte técnico para manter sua aplicação atualizada com as últimas melhorias e otimizações.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                Criação de designs e layouts modernos para websites.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
