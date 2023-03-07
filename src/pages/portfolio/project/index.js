import Naaz from '../../../images/Naaz.jpeg';
import HealthDekho from '../../../images/healthdekho.png';
import IQV from '../../../images/IQV.png';
import Lims from '../../../images/lims.svg';
import MecureSmart from '../../../images/mecuresmart.webp';
import MecureWecare from '../../../images/mecurewecare.png';
import Otobids from '../../../images/Otobids.jpeg';
import Shiaism from '../../../images/Shiaism.png';
import Youthberry from '../../../images/youthberry.png';
const projectArray = [
    {
        title: "Naaz Aquarium",
        image: Naaz,
        webLink:'https://naazaquarium.com/'
    },
    {
        title: "Otobids",
        image: Otobids,
        webLink:'http://otobids.com/',
        appLink:"https://play.google.com/store/apps/details?id=com.otobids.app"
    },
    {
        title: "MecureSmart",
        image: MecureSmart,
        appLink:'https://play.google.com/store/apps/details?id=com.mecure.smartbuy&hl=en_IN&gl=US'
    },
    {
        title: "MecureWecare",
        image: MecureWecare,
        webLink:'http://mecurewecare.com/'
    },
    {
        title: "Shiaism",
        image: Shiaism,
        appLink:'https://play.google.com/store/apps/details?id=com.shiaism'
    },
    {
        title: "Youthberry",
        image: Youthberry,
        webLink:'https://youthberry.ng/'
    },
    {
        title: "HealthDekho",
        image: HealthDekho,
        webLink:'https://healthdekho.com/'
    },
    {
        title: "Lims",
        image: Lims,
        webLink:'http://lims.mecure.com/'
    },
    {
        title: "IQV",
        image: IQV,
        appLink:'https://play.google.com/store/apps/details?id=com.mafhh.iqv'
    }
]

const Projects = () => {

    const projectDiv = (project) => {
        const filter = project.webLink && project.appLink ? "" : (project.webLink ? "filter-web" : "filter-app")
        return (
            <div className={`col-lg-4 col-md-6 portfolio-item ${filter}`} key = {project.title}>
                <div className="portfolio-wrap">
                    <img
                        src={project.image}
                        className="img-fluid"
                        alt=""
                        style={{minHeight:'150px'}}
                    />
                    <div className="portfolio-info">
                        <h4>{project.title}</h4>
                        {/* <p>App</p> */}
                        <div className="portfolio-links">
                            {project.webLink ? 
                            <a
                                href={project.webLink}
                                data-gallery="portfolioGallery"
                                className="portfolio-lightbox"
                                title="App 1"
                                target={"_blank"}
                            >
                                <i className="bx bxl-chrome" />
                            </a>
                            : null }
                            {project.appLink ?
                            <a
                                href={project.appLink}
                                className="portfolio-details-lightbox"
                                data-glightbox="type: external"
                                title="Portfolio Details"
                                target={"_blank"}
                            >
                                {/* <i class='bx bxl-android'></i> */}
                                <i className="bx bxl-android" />
                            </a>
                            : null }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <section id="portfolio" className="portfolio section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                        {/* <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                            fugiat sit in iste officiis commodi quidem hic quas.
                        </p> */}
                    </div>
                    <div className="row">
                        <div
                            className="col-lg-12 d-flex justify-content-center"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">
                                    All
                                </li>
                                <li data-filter=".filter-web">Web</li>
                                <li data-filter=".filter-app">Mobile</li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="row portfolio-container"
                        data-aos="fade-up"
                        data-aos-delay={200}
                    >
                        {projectArray.map((project) => {
                                return projectDiv(project)
                        })}
                    </div>
                </div>
            </section>
            {/* End Portfolio Section */}
        </>

    )
}

export default Projects