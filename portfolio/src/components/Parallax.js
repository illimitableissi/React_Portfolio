import React from 'react';

const Parallax = (props) => {
    return (
        <div className="parallax-container valign-wrapper">
        <div className="section no-pad-bot">
            <div className="container">
                <div className="row center">
                    <h2 className="header col s12 light center">{props.name}</h2>
                </div>
            </div>
        </div>
        <div className="parallax"><img src={props.img} alt="Unsplashed background img 2"></img></div>
        </div>
    );
};

export default Parallax;