import React from 'react';



const About = () => {
    const [header] = React.useState({subHeading:"About me", text: "Get to know me better. Read my bio to get some information about me. To get more information about me go to contact me page and contact me through it "})
    return (
        <div className="about">
            <div className="container">
            <div className="common">
                <h3 className="heading">{header.mainHeader}</h3>
                <h1 className="mainHeader">{header.subHeading}</h1>
                <p className="mainContent">{header.text}</p>

            </div>
            </div>
            <div className="row h-650 alignCenter">
                <div className="col-6 ">
                    <div className="about__img"><img src="https://besthqwallpapers.com/Uploads/18-2-2019/80892/thumb2-apple-macbook-laptop-on-black-background-modern-technology-laptop-apple.jpg" alt=""></img></div>    
                </div>
                <div className="col-6">
                    <div className="about__info">
                        <h1>Hi there</h1>
                        <div className="about__info-p1">I am a full stack web developer and I am currently on 10th standard. I live in New Delhi. I am relatively new to this field. I have experience with web development for more than 1 year. Currently I am working as a freelancer and a tutor. I am also looking for an internship to grow up the experience.</div>
                        <div className="about__info-p2"> My main skill set is React and I have created several projects with it. I am also familiar with node.js. I love to work with real-people and enjoy that experience</div>
                    </div>
                    <div className="row">
                        <div className="info__contacts">
                            <div className="row">
                                <div className="col-6">
                                    <strong>Name</strong>
                                    <p>Arnav aggarwal</p>
                                </div>
                                <div className="col-6">
                                    <strong>Email</strong>
                                    <p>programmeraggarwal@gmail.com</p>
                                </div>
                                <div className="col-6">
                                    <strong>Phone:</strong>
                                    <p>9818905646</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default About
