import React from 'react';
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import { Column, Row, Container } from './components/Grid';
import information from './information';
import Card from './components/Card';
import "./index.css";
import App from './components/App';
import MainParallax from './components/mainParallax';
import Parallax from './components/Parallax';

console.log(information[0].appLink);
console.log(information[0].gitHub);




const Portfolio = () => {
    return (
        <div>
        <Nav />
        <MainParallax />
        <Card />
        <Parallax name="Portfolio/Projects" img="images/landscape1.jpg" />
        <Container>
            <Row>
                <Column>
                    <App link={information[0].appLink} image={information[0].imgSrc} name={information[0].name} message={information[0].message} git={information[0].gitHub}/>
                </Column>
                <Column>
                    <App link={information[1].appLink} image={information[1].imgSrc} name={information[1].name} message={information[1].message} git={information[1].gitHub}/>  
                </Column>
                <Column>
                    <App link={information[2].appLink} image={information[2].imgSrc} name={information[2].name} message={information[2].message} git={information[2].gitHub}/>
                </Column>
            </Row>
            <Row>
                <Column>
                    <App link={information[3].appLink} image={information[3].imgSrc} name={information[3].name} message={information[3].message} git={information[3].gitHub}/>  
                </Column>
                <Column>
                    <App link={information[4].appLink} image={information[4].imgSrc} name={information[4].name} message={information[4].message} git={information[4].gitHub}/>
                </Column>
                <Column>
                    <App link={information[5].appLink} image={information[5].imgSrc} name={information[5].name} message={information[5].message} git={information[5].gitHub}/>  
                </Column>
            </Row>
            <Row>
                <Column>
                    <App link={information[6].appLink} image={information[6].imgSrc} name={information[6].name} message={information[6].message} git={information[6].gitHub}/>
                </Column>
                <Column>
                    <App link={information[7].appLink} image={information[7].imgSrc} name={information[7].name} message={information[7].message} git={information[7].gitHub}/>
                </Column>
                <Column>
                    <App link={information[8].appLink} image={information[8].imgSrc} name={information[8].name} message={information[8].message} git={information[8].gitHub}/>
                </Column>
            </Row>
            <Row>
                <Column>
                    <App link={information[9].appLink} image={information[9].imgSrc} name={information[9].name} message={information[9].message} git={information[9].gitHub}/>
                </Column>
                <Column>
                    <App link={information[10].appLink} image={information[10].imgSrc} name={information[10].name} message={information[10].message} git={information[10].gitHub}/>
                </Column>
                <Column>
                    <App link={information[11].appLink} image={information[11].imgSrc} name={information[11].name} message={information[11].message} git={information[11].gitHub}/>
                </Column>
            </Row>
        </Container>
        <Parallax name="Feel free to contact me!" img="images/landscape3.jpg" />
        <Contact />  
        </div>
    )};


export default Portfolio;