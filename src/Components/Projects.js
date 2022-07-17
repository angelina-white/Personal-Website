import construction from '../images/construction.jpg';
import p11 from '../images/p11.png';
import p12 from '../images/p12.png';
import p13 from '../images/p13.png';
import p14 from '../images/p14.png';
import p21 from '../images/p21.png';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Projects()
{
    useEffect(() =>
    {
        gsap.from("#proj1Back", 
        {
            scrollTrigger:
            {
               trigger: "#proj1Back",
               start: "top 725px",
               end: "bottom 900px",
               scrub: true,
            }, x: -200, opacity: 0
        })
        gsap.from("#proj1", 
        {
            scrollTrigger:
            {
               trigger: "#proj1",
               start: "top 725px",
               end: "bottom 900px",
               scrub: true,
            }, x: -200, opacity: 0
        })

        gsap.from("#proj2Back", 
        {
            scrollTrigger:
            {
               trigger: "#proj2Back",
               start: "top 725px",
               end: "bottom 900px",
               scrub: true,
            }, x: -200, opacity: 0
        })
        gsap.from("#proj2", 
        {
            scrollTrigger:
            {
               trigger: "#proj2",
               start: "top 725px",
               end: "bottom 900px",
               scrub: true,
            }, x: -200, opacity: 0
        })

        gsap.from("#proj3Back", 
        {
            scrollTrigger:
            {
               trigger: "#proj3Back",
               start: "top 725px",
               end: "bottom 900px",
               scrub: true,
            }, x: -200, opacity: 0
        })
        gsap.from("#proj3", 
        {
            scrollTrigger:
            {
               trigger: "#proj3",
               start: "top 725px",
               end: "bottom 900px",
               scrub: true,
            }, x: -200, opacity: 0
        })

    }, [])


    const openProj1 = () => 
    {
        window.open("https://job-app-tracking.herokuapp.com");
    };

    const openProj1Git = () => 
    {
        window.open("https://github.com/angelina-white/Job-App-Tracker-Demo");
    };

    const openProj2Front = () => 
    {
        window.open("https://github.com/angelina-white/Group-Shopping-List-Frontend");
    };

    const openProj2Back = () => 
    {
        window.open("https://github.com/angelina-white/Group-Shopping-List-Backend");
    };

    return (
        <div id="projectsContainer">
            <h1 className="header" id="projectTitle">Projects</h1>
            <div id="projects">
                <div id="proj1Back"></div>
                <div id="proj1">
                    <Carousel fade className="carousel-dark carousel">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ p11 }
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ p12 }
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ p13 }
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ p14 }
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <h2 className="projHeader">Job Application Tracker</h2>
                    <h5 className="projDescription">Description goes here...</h5>
                    <p className="projLang">Ruby on Rails, React, ActiveRecord, BCrypt, Javascript, CSS</p>
                    <p onClick={ openProj1 } className="projLinks">Demo</p>
                    <p onClick={ openProj1Git } className="gitLinks">GitHub</p>
                </div>

                <div id="proj2Back"></div>
                <div id="proj2">
                    <img src={ p21 } alt="contructionPhoto3" className="constructionPhoto" />
                    <h2 id="projHeaderCon">Group Shopping List</h2>
                    <h5 id="projDescriptionCon">Description goes here...</h5>
                    <p id="projLangCon">Ruby, React, Sinatra, ActiveRecord, Javascript, CSS</p>
                    <p onClick={ openProj2Front } className="gitLinks" id="proj2Git" >GitHub - Frontend</p>
                    <p onClick={ openProj2Back } className="gitLinks" id="proj2Git2" >GitHub - Backend</p>
                </div>

                <div id="proj3Back"></div>
                <div id="proj3">
                    <img src={ construction } alt="contructionPhoto3" className="constructionPhoto" />
                    <h2 id="projHeaderCon">Travel Planner</h2>
                    <h5 id="projDescriptionCon">Currently working on...</h5>
                    <p id="projLangCon">Ruby on Rails, React, ActiveRecord, BCrypt, Javascript, CSS</p>
                    <p id="comingSoon">Demo coming soon</p>
                </div>
            </div>
        </div>
    )
}
export default Projects