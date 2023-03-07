import Resume from '../../../Farman_Ali_Resume.pdf'

const EducationArray = [
    {
        fromTo: 'September 2009 to July 2015',
        name: 'Mumbai University',
        role: 'Bachelor of Engineering - IT'
    },
    {
        fromTo: 'June 2007 to August 2009',
        name: 'Maharashtra State Board',
        role: 'Higher Secondary Education'
    },
    {
        fromTo: 'June 1995 to May 2007',
        name: 'Maharashtra State Board',
        role: 'Secondary School Certificate'
    },
]
const ExperienceArray = [
    {
        fromTo: 'November 2020 to present',
        name: 'Servify Pvt Ltd',
        role: 'Assistant Manager',
        responsibilty:[
            "Worked on an Agile (Scrum) Development Team to deliver regular updates to business team and project managers",
            "Managed requisite gathering and validation gathering processes to develop large-scale web application projects. Outlined and executed a clear set of technical requirements through a collaborative effort.",
            "Interfaced product team professionals to identify the consum and user goals for specific web applications",
            "Executed full stack development of internal web applications"
        ]

    },
    {
        fromTo: 'Jan 2018 to October 2020',
        name: 'HealthDekho Pvt Ltd',
        role: 'Sr. Web Developer',
        responsibilty:[
            "Communicated with doctors and lab assistant to gather the requirements and implement them in the project",
            "Worked in a high-speed, agile environment to ship features in the shortest time possible",
            "Deliver quality code by applying the best development practices Implement software components according to the design specifications",
            "Participate in estimating project efforts and delivery timelines"
        ]
    },
    {
        fromTo: 'November 2015 to December 2017',
        name: 'Infiny Webcom Pvt Ltd',
        role: 'Web and Mobile Application Developer',
        responsibilty:[
            "Front end coding with HTML and CSS. Created forms for user input. Extensive use of CSS. Web sites are developed, maintained and run within CMS",
            "Coded JavaScript for page functionality",
            "Ensured site design integrity and quality control consistency throughout the project's lifecycle",
            "Developed a complex AJAX application based on the jQuery framework.",
            "Produce elegant interactive solutions to complex problems that perform effectively across cross-browser and cross-domain environments",
            "Debugging and testing existing code, JavaScript performance optimization"
        ]
    }
]
const Experiences = () => {
    return (
        <>
            {/* ======= Resume Section ======= */}
            <section id="resume" className="resume">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Resume</h2>
                        <p>
                           <a className='submit' href={Resume} download>Download Resume</a>
                        </p>
                    </div>
                    <div className="row" style={{textAlign:'left'}}>
                        <div className="col-lg-12">
                            <h3 className="resume-title">Professional Experience</h3>
                            {
                                ExperienceArray.map((experience)=>{
                                        return(
                                            <div className="resume-item" key = {experience.fromTo}>
                                            <h4>{experience.role}</h4>
                                            <h5>{experience.fromTo}</h5>
                                            <p>
                                                <em>{experience.name} </em>
                                            </p>
                                            <ul>
                                                {experience.responsibilty.map((resp)=>{
                                                    return(
                                                        <li key = {resp}>
                                                            {resp}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        )
                                })
                            }
                        </div>
                        <div className="col-lg-12">
                            {/* <h3 className="resume-title">Summary</h3>
                            <div className="resume-item pb-0">
                                <h4>Farman Ali</h4>
                                <p>
                                    <em>
                                        Innovative and deadline-driven Graphic Designer with 3+ years of
                                        experience designing and developing user-centered digital/print
                                        marketing material from initial concept to final, polished
                                        deliverable.
                                    </em>
                                </p>
                                <ul>
                                    <li>Portland par 127,Orlando, FL</li>
                                    <li>(123) 456-7891</li>
                                    <li>alice.barkley@example.com</li>
                                </ul>
                            </div> */}
                            <h3 className="resume-title">Education</h3>
                            {EducationArray.map((education)=>{
                                    return(
                                        <div className="resume-item" key = {education.isDisabled}>
                                            <h4>{education.role}</h4>
                                            <h5>{education.fromTo}</h5>
                                            <p>
                                                <em>{education.name}</em>
                                            </p>
                                        </div>
                                    )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            {/* End Resume Section */}
        </>


    )
}

export default Experiences;