const skillsArray = [
    {
        name:"Node Js",
        percentage:'80'
    },
    {
        name:"React JS",
        percentage:'70'
    },
    {
        name:"PHP",
        percentage:'70'
    },
    {
        name:"MYSQL",
        percentage:'80'
    },
    {
        name:"Javascript",
        percentage:'90'
    },
    {
        name:"HTML",
        percentage:'90'
    },
    {
        name:"CSS",
        percentage:'60'
    },
    {
        name:"React Native",
        percentage:'50'
    }
]

const Skills = () => {
    return (
        <>
            <section id="skills" className="skills section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>
                        My skills in full-stack development, including expertise in Node.js, React.js, MySQL, PHP, HTML, and CSS, enable me to build dynamic and intuitive web applications that deliver exceptional user experiences.
                        </p>
                    </div>
                    <div className="row skills-content">
                        {skillsArray.map((skill)=>{
                            return(
                                <div className="col-lg-6" key = {skill.name}>
                                    <div className="progress">
                                        <span className="skill">
                                            {skill.name} <i className="val">{skill.percentage}%</i>
                                        </span>
                                        <div className="progress-bar-wrap">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                aria-valuenow={skill.percentage}
                                                aria-valuemin={0}
                                                aria-valuemax={skill.percentage}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            {/* End Skills Section */}
        </>

    )
}

export default Skills