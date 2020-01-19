import React from 'react';
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css"



const Portfolio = () => {
    return (
        <div>
        <Nav />
        <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
            <div className="container">
                <div className="row">
                    <h3 className="header col s12 center">Isimemen Inegbedion</h3>
                    <p className= "center">Full Stack Web Developer</p>
                    <p></p>
                </div>
            </div>
        </div>
    <div className="parallax"><img src="images/landscape2.jpg" alt="Unsplashed background img 2"></img></div>
</div>
<br></br>
<div className="container">
    <div className="row row animated rotateInDownLeft delay-1s">
        <div className="col s12 m12">
            <div className="card horizontal">
                <div className="card-image">
                    <img src="images/myphoto.JPG"></img>
                </div>
                <div className="card-content">
                    <p>"Hello! I am Isimemen Inegbedion, a Full Stack Web Developer based in Atlanta, GA. My goal is to provide clean and exciting user experiences and precise website and application functionality!"</p>
                </div>
          </div>
        </div>
    </div>
</div>


<div className="parallax-container valign-wrapper">
<div className="section no-pad-bot">
    <div className="container">
        <div className="row center">
            <h2 className="header col s12 light center">Portfolio/Projects</h2>
        </div>
    </div>
</div>
<div className="parallax"><img src="images/landscape1.jpg" alt="Unsplashed background img 2"></img></div>
</div>
    
        <Projects />
        <div className="parallax-container valign-wrapper">
            <div className="section no-pad-bot">
                <div className="container">
                 <div className="row center">
                    <h1 id="info-check" className="header col s12 light center">Feel free to contact me!</h1>             
                </div>
            </div>
        </div>
        <div className="parallax"><img src="images/landscape3.jpg" alt="Unsplashed background img 3"></img></div>
        </div>
        <br></br>
        <Contact /> 
        </div>
    );
};


export default Portfolio;