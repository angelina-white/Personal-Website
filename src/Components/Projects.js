import p11 from '../images/p11.png';
import p12 from '../images/p12.png';
import p13 from '../images/p13.png';
import p14 from '../images/p14.png';
import p15 from '../images/p15.png';
import p21 from '../images/p21.png';
import tp1 from '../images/tp1.png';
import tp2 from '../images/tp2.png';
import tp3 from '../images/tp3.png';
import tp4 from '../images/tp4.png';
import tp5 from '../images/tp5.png';
import tp6 from '../images/tp6.png';
import tp7 from '../images/tp7.png';
import tp8 from '../images/tp8.png';
import tp9 from '../images/tp9.png';
import tp10 from '../images/tp10.png';
import tp11 from '../images/tp11.png';
import mg1 from '../images/mg1.png';
import mg2 from '../images/mg2.png';
import mg3 from '../images/mg3.png';
import mg4 from '../images/mg4.png';
import mg5 from '../images/mg5.png';
import er1 from '../images/er1.png';
import er2 from '../images/er2.png';
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

        gsap.from("#proj4Back", 
        {
            scrollTrigger:
            {
               trigger: "#proj4Back",
               start: "top 725px",
               end: "bottom 900px",
               scrub: true,
            }, x: -200, opacity: 0
        })
        gsap.from("#proj4", 
        {
            scrollTrigger:
            {
               trigger: "#proj4",
               start: "top 725px",
               end: "bottom 900px",
               scrub: true,
            }, x: -200, opacity: 0
        })

        gsap.from("#proj5Back", 
        {
            scrollTrigger:
            {
               trigger: "#proj5Back",
               start: "top 725px",
               end: "bottom 900px",
               scrub: true,
            }, x: -200, opacity: 0
        })
        gsap.from("#proj5", 
        {
            scrollTrigger:
            {
               trigger: "#proj5",
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

    const openProj4 = () => 
    {
        window.open("https://github.com/angelina-white/Character-Display");
    };

    const openProj5 = () => 
    {
        window.open("https://github.com/angelina-white/Exchange-Rate-Calculator");
    };

    return (
        <div id="projectsContainer">
            <h1 className="header" id="projectTitle">Flatiron School Projects</h1>
            <div id="projects">
                <div id="proj1Back"></div>
                <div id="proj1">
                    <Carousel fade className="carousel-dark carousel">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ tp1 }
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ tp2 }
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ tp3 }
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ tp4 }
                            alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ tp5 }
                            alt="Fifth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ tp6 }
                            alt="Sixth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ tp7 }
                            alt="Seventh slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ tp8 }
                            alt="Eigth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ tp9 }
                            alt="Ninth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ tp10 }
                            alt="Tenth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ tp11 }
                            alt="Eleventh slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <h2 className="projHeader">Travel Planner</h2>
                    <p className="projDescription">Have all trip information consolidated and plan a trip with multiple people in one place. User is able to see summary of the trip including when flights are, when hotel check in/check out is, and when activities are. User is able to edit trip information and view the itinerary on a calendar. The activities can be viewed on a timeline according to when the trip starts and ends. User can create a budget and can be split between two people using a percentage slider. The budgets can be viewed with charts. User can message other users included in the trip in a chat room. User recieves emails when signing up and when being added to a trip.</p>
                    <h5 className="projLang">React, Javascript, Ruby on Rails, ActiveRecord, ActiveMailer, Socket.io, CSS, BCrypt</h5>
                    <p onClick={ openProj1Git } className="projLinks">GitHub</p>
                </div>

                <div id="proj2Back"></div>
                <div id="proj2">
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
                                alt="Fourth slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                id="carPhoto"
                                src={ p15 }
                                alt="Fifth slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    <h2 className="projHeader">Job Application Tracker</h2>
                    <p className="projDescription">Track job applications, interviews, and offers. Add, edit, and delete jobs you applied for. Add interviews and offers to selected jobs. View calendar to see when interviews are. Compare offers. Check the stats for how many applications you applied for and how many of each application status there is.</p>
                    <h5 className="projLang">React, Javascript, Ruby on Rails, ActiveRecord, BCrypt, CSS</h5>
                    <p onClick={ openProj1Git } className="projLinks">Github</p>
                    <p onClick={ openProj1 } className="gitLinks">Demo</p>
                </div>

                <div id="proj3Back"></div>
                <div id="proj3">
                    <img src={ p21 } alt="contructionPhoto3" className="constructionPhoto" />
                    <h2 id="projHeaderCon">Group Shopping List</h2>
                    <p id="projDescriptionCon">A shopping list for multiple people that shows how much of each item a person is getting and how much it will cost. Can be used when one person in the group has a membership like with Costco. Great for roommates, work, parties, and other communities.</p>
                    <h5 id="projLang2">React,Javascript, Ruby, Sinatra, ActiveRecord, CSS</h5>
                    <p onClick={ openProj2Front } className="gitLinks" id="proj2Git" >GitHub - Frontend</p>
                    <p onClick={ openProj2Back } className="gitLinks" id="proj2Git2" >GitHub - Backend</p>
                </div>

                <div id="proj4Back"></div>
                <div id="proj4">
                    <Carousel fade className="carousel-dark carousel">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ mg1 }
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ mg2 }
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ mg3 }
                            alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ mg4 }
                            alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ mg5 }
                            alt="Fifth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <h2 className="projHeader">Movie Character Display</h2>
                    <p className="projDescription">Displays a list of movie characters. User can add or remove characters to the database. User can search for characters and favorite characters.</p>
                    <h5 className="projLang">React, Javascript, CSS</h5>
                    <p onClick={ openProj4 } className="projLinks">GitHub</p>
                </div>

                <div id="proj5Back"></div>
                <div id="proj5">
                    <Carousel fade className="carousel-dark carousel">
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ er1 }
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="carPhoto"
                            src={ er2 }
                            alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <h2 className="projHeader">Exchange Rate Calculator</h2>
                    <p className="projDescription">User can choose the currency, search for a currency, and convert from euros to the chosen currency.</p>
                    <h5 className="projLang">Javascript, HTML, CSS</h5>
                    <p onClick={ openProj5 } className="projLinks">GitHub</p>
                </div>
            </div>
        </div>
    )
}
export default Projects