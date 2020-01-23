import React from 'react';

export const Container = ({children}) => {
    return (
        <div className="container">{children}</div>
    );
};



export const Row = ({children}) => {
    return (
        <div data-aos="fadeInUp">
        <div className="row">{children}</div>
        </div>   
    );
};


export const Column = ({children}) => {
    return (
        <div className="col s12 m4">{children}</div>
    );
};


