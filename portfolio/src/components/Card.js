import React from 'react';

const Card = () => {
    return (
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
    );
};

export default Card;