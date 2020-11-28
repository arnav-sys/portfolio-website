import React from 'react'

const Work = () => {
    const [state] = React.useState([
        {
          id: 1,
          src:"./netflix.png",
          link:"https://netflix-clone-84d95.web.app/",
          heading: "netflix-clone",
          text:
            "This is a clone of a popular streaming app netflix made by react.js. This application has login authentication. It has a landing page, a signin and a signup page, profile page and also a home page",
        },
        {
          id: 2,
          src:"./airbnb.png",
          link:"https://airbnbclone123.herokuapp.com/",
          heading: "Airbnb-clone",
          text:
            "This is a clone of airbnb website made by react.js and redux. It has a landing page and a search page",
        },
        {
          id: 3,
          link:"https://covid-19-tracker-55eab.web.app/",
          src:"./covid.png",
          heading: "Covid-19-tracker",
          text:
            "This is a covid-19 tracker made by react.js and material-ui. It has full functionality and extracts data from who api",
        },
        {
          id: 4,
          link:"https://twitter-clone-4c124.web.app/",
          src:"./twitter.png",
          heading: "twitter-clone",
          text:
            "Every website looks awful without css. I have been using css for more than a year",
        },
        {
          id: 5,
          src:"",
          link:"https://github.com/arnav-sys/amazon-clone",
          heading: "amazon-clone",
          text:
            "this is the clone of amazon. It is fully e-commerce and has a landing page, add to cart page, payment processing page and a order's history page. It is fully functional. I havenot deployed it yet but you can see my github page for this project",
        },
        { 
          id: 6,
          src:"",
          heading: "Blogger Website",
          link:"https://arnav-sys.github.io/blogger-website/",
          text:
            "This is a blogger website made using html and css. It is a beatiful static website",
        },
      ]);
    return (
        <div className="work">
            <h1 className="mainHeader">Some of My Works</h1>
            <div className="container">
            <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                  <div className="services__box-p"><a href={info.link}>go to the deployed version</a></div>
                </div>
              </div>
            ))}
          </div>
            </div>
        </div>
    )
}

export default Work
