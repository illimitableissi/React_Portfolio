import React from 'react';

const Container = ({children}) => {
    return (
        <div className="container">{children}</div>
    );
};



const Row = ({children}) => {
    return (
        <div className="row animated fadeInUp delay-4s">{children}</div>   
    );
};


const Column = ({children}) => {
    return (
        <div className="col s12 m4">{children}</div>
    );
};

export default Grid;
