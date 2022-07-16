import construction from '../construction.jpg';
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
               end: "bottom 550px",
               scrub: true,
            }, x: -200, opacity: 0
        })
        gsap.from("#proj1", 
        {
            scrollTrigger:
            {
               trigger: "#proj1",
               start: "top 725px",
               end: "bottom 550px",
               scrub: true,
            }, x: -200, opacity: 0
        })

        gsap.from("#proj2Back", 
        {
            scrollTrigger:
            {
               trigger: "#proj2Back",
               start: "top 725px",
               end: "bottom 550px",
               scrub: true,
            }, x: -200, opacity: 0
        })
        gsap.from("#proj2", 
        {
            scrollTrigger:
            {
               trigger: "#proj2",
               start: "top 725px",
               end: "bottom 550px",
               scrub: true,
            }, x: -200, opacity: 0
        })

        gsap.from("#proj3Back", 
        {
            scrollTrigger:
            {
               trigger: "#proj3Back",
               start: "top 725px",
               end: "bottom 550px",
               scrub: true,
            }, x: -200, opacity: 0
        })
        gsap.from("#proj3", 
        {
            scrollTrigger:
            {
               trigger: "#proj3",
               start: "top 725px",
               end: "bottom 550px",
               scrub: true,
            }, x: -200, opacity: 0
        })

    }, [])

    return (
        <div id="projectsContainer">
            <h1 className="header" id="projectTitle">Projects</h1>
            <div id="projects">
                <div id="proj1Back"></div>
                <div id="proj1">
                    <img src={ construction } className="constructionPhoto" />
                    <h2 className="projHeader">Job Application Tracker</h2>
                    <h3 className="projDes">Description:</h3>
                    <p className="projDescription">Description goes here...</p>
                    <h3 className="projLang">Languages:</h3>
                    <p className="projLanguages">Languages goes here...</p>
                    <a href="" className="projLinks">Demo</a>
                </div>

                <div id="proj2Back"></div>
                <div id="proj2">
                    <img src={ construction } className="constructionPhoto" />
                    <h2 className="projHeader">Shop We All</h2>
                    <h3 className="projDes">Description:</h3>
                    <p className="projDescription">Description goes here...</p>
                    <h3 className="projLang">Languages:</h3>
                    <p className="projLanguages">Languages goes here...</p>
                    <a href="" className="projLinks">Demo</a>
                </div>

                <div id="proj3Back"></div>
                <div id="proj3">
                    <img src={ construction } className="constructionPhoto" />
                    <h2 className="projHeader">Travel Planner</h2>
                    <h3 className="projDes">Description:</h3>
                    <p className="projDescription">Description goes here...</p>
                    <h3 className="projLang">Languages:</h3>
                    <p className="projLanguages">Languages goes here...</p>
                    <a href="" className="projLinks">Demo</a>
                </div>
            </div>
        </div>
    )
}
export default Projects