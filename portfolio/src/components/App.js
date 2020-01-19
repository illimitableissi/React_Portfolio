import React from 'react';

const App = (props) => {
    return (
        <div className="card hoverable">
        <div className="card-image">
            <a href={props.link}><img src={props.image}></img></a>
            <span className="card-title">{props.name}</span>
        </div>
            <div className="card-content"><p>{props.message}</p></div>
            <div className="card-action">
              <a href={props.git}>See the Code</a>
        </div>
    </div>
    );
};

export default App;