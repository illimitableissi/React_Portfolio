import React from 'react';

const Nav = () => {
    return (
        <div>
        <ul id="slide-out" className="sidenav">
    <li>
        <div className="user-view">
            <div className="background">
                <img src="images/background1.jpg"></img>
            </div>
            <img className="circle" src="images/myphoto.JPG"></img>
            <span className="white-text name">Isimemen Inegbedion</span>
            <span className="white-text email">isimemeni@gmail.com</span>
        </div>  
    </li>
    <h6>Github Profile</h6>
    <a href="https://github.com/illimitableissi"><img src="images/github2.png"></img></a>
    <br></br>
    <div className="divider"></div>
    <br></br>
    <h6>Linkedin Profile</h6>
    <a href="https://www.linkedin.com/in/isimemeninegbedion"><img src="images/linkedin.png" className="responsive"></img></a>
    <br></br>
    <div className="divider"></div>
    <br></br>
    <h6>Resume</h6>
    <a href="https://docs.google.com/document/d/1cofIdSRASvccdHMkob66eAWFUiBCKuUhodXqSwc0epo/edit?usp=sharing"><img src="images/pdf.png"></img></a>
</ul>
<a href="#" data-target="slide-out" className="sidenav-trigger blue-grey darken-4 btn">Personal Contact</a>
            
        </div>
    );
};

export default Nav;