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

var infoOne = [information[0], information[1], information[2]]
var infoTwo = [information[3], information[4], information[5]]
var infoThree = [information[6], information[7], information[8]]
var infoFour = [information[9], information[10], information[11]]
var infoFive = [information[12], information[13]]

console.log(infoOne)

const Portfolio = () => {
    return (
        <div>
        <Nav />
        <MainParallax />
        <Card />
        <Parallax name="Portfolio/Projects" img="images/landscape1.jpg" />
        <Container>
            <Row>
            {infoOne.map(info => (
                <Column>
                    <App link={info.appLink} image={info.imgSrc} name={info.name} message={info.message} git={info.gitHub} tech={info.tech}/>
                </Column>
                  ))}
            </Row>
            <Row>
            {infoTwo.map(info => (
                <Column>
                    <App link={info.appLink} image={info.imgSrc} name={info.name} message={info.message} git={info.gitHub} tech={info.tech}/>
                </Column>
                  ))}
            </Row>
            <Row>
            {infoThree.map(info => (
                <Column>
                    <App link={info.appLink} image={info.imgSrc} name={info.name} message={info.message} git={info.gitHub} tech={info.tech}/>
                </Column>
                  ))}
            </Row>
            <Row>
            {infoFour.map(info => (
                <Column>
                    <App link={info.appLink} image={info.imgSrc} name={info.name} message={info.message} git={info.gitHub} tech={info.tech}/>
                </Column>
                  ))}
            </Row>
            <Row>
            {infoFive.map(info => (
                <Column>
                    <App link={info.appLink} image={info.imgSrc} name={info.name} message={info.message} git={info.gitHub} tech={info.tech} />
                </Column>
                ))}
            </Row>
        </Container>
        <Parallax name="Feel free to contact me!" img="images/landscape3.jpg" />
        <Contact />  
        </div>
    )};


export default Portfolio;