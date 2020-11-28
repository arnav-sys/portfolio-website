import React from "react";
import {
  FaGithub,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "Skills",
    subHeading: "My skills",
    text:
      "Checkout my awesome skills to know for which job you need to hire me. And if you like for skills then make sure to contact me at the contact page",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Git and Github",
      text:
        "I know how to use git and github with command line and without command line. I have been uploading  my projects on github for a very long time",
    },
    {
      id: 2,
      icon: <FaReact className="commonIcons"/>,
      heading: "React and React native",
      text:
        "React is one of my best and favourite skills I have. I have created several projects using react and also have teached it to various people",
    },
    {
      id: 3,
      icon: <FaHtml5 className="commonIcons" />,
      heading: "HTML",
      text:
        "I have been working with html for a very long time and have developed a strong foundation",
    },
    {
      id: 4,
      icon: <FaCss3Alt className="commonIcons" />,
      heading: "Styling with css",
      text:
        "Every website looks awful without css. I have been using css for more than a year",
    },
    {
      id: 5,
      icon: <FaJs className="commonIcons" />,
      heading: "Javascript",
      text:
        "I love working with javascript and have made a lot of cool projects from it",
    },
    { 
      id: 6,
      icon: <FaNodeJs className="commonIcons" />,
      heading: "Node.js",
      text:
        "Although I am not fully a node.js developer but I have enough knowledge about it to create a simple backend",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;