import React from 'react';

export const Container = ({children}) => {
    return (
        <div className="container">{children}</div>
    );
};



export const Row = ({children}) => {
    return (
        <div className="row animated fadeInUp delay-4s">{children}</div>   
    );
};


export const Column = ({children}) => {
    return (
        <div className="col s12 m4">{children}</div>
    );
};


