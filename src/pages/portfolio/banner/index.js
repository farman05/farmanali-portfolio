import {Helmet} from "react-helmet";
const Banner = () => {
    return (
        <>
            {/* ======= Hero Section ======= */}
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay={100}>
                    <h1>Sayed Farman Ali</h1>
                    <p>
                        I'm{" "}
                        <span
                            className="typed"
                            data-typed-items="Full Stack Developer, Freelancer"
                        />
                    </p>
                    <div className="social-links">
                        {/* <a href="#" className="twitter">
                            <i className="bx bxl-twitter" />
                        </a>
                        <a href="#" className="facebook">
                            <i className="bx bxl-facebook" />
                        </a>
                        <a href="#" className="instagram">
                            <i className="bx bxl-instagram" />
                        </a> */}
                        <a href="https://github.com/farman05" target={"_blank"} className="google-plus">
                            <i className="bx bxl-github" />
                        </a>
                        <a target={"_blank"} href="https://in.linkedin.com/in/farman-ali-hussain-970116106" className="linkedin">
                            <i className="bx bxl-linkedin" />
                        </a>
                    </div>
                </div>
            </section>
            {/* End Hero */}
        </>


    )
}

export default Banner;