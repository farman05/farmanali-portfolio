import Farman from '../../../images/farman_4.png'
const About = () => {
    return (
        <>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>
                            Hi, I'm Sayed Farman Ali, a full-stack developer with 7 years of experience in Node.js, React.js, MySQL, PHP, HTML, and CSS. I specialize in building scalable and robust web applications that deliver exceptional user experiences. Let's create something amazing together!
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={Farman} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>Full Stack Web Developer</h3>
                            <p className="fst-italic">
                                 Bringing your ideas to life with cutting-edge technology
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right" />{" "}
                                            <strong>Birthday:</strong> <span>5th April 1991</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right" />{" "}
                                            <strong>Website:</strong> <span>www.farmanali.in</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right" /> <strong>Phone:</strong>{" "}
                                            <span>+91 9987383223</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                                            <span>Mumbai, India</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                                            <span>31</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right" /> <strong>Degree:</strong>{" "}
                                            <span>Bachelor</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right" />{" "}
                                            <strong>Email:</strong> <span>farmanali0504@gmail.com</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right" />{" "}
                                            <strong>Freelance:</strong> <span>Available</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                            Throughout my career, I've worked with clients from a diverse range of industries, helping them achieve their digital goals through the power of technology. Whether it's building custom web applications or improving existing systems, I approach every project with a passion for innovation and a dedication to delivering results that exceed expectations
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Section */}
        </>

    )
}

export default About;