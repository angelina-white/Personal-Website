import contactImage from '../contactImage.jpg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Contact()
{
    useEffect(() =>
    {
        gsap.from("#contactPrompt", 
        {
            scrollTrigger:
            {
               trigger: "#contactContainer",
               start: "top 400px",
               end: "bottom 800px",
               scrub: true,
            }, opacity: 0, y: 50
        })
    },[])

    const openContact = () => 
    {
        window.open("https://www.linkedin.com/in/angelinawhite/");
    };

    return (
        <div id="contactContainer">
            <img src={ contactImage } alt="contactImage" id="contactImage"/>
            <div id="contactBackground"></div>
            <div id="contactPrompt">
                <h1 id="contactHeader">Contact:</h1>
                <p onClick={ openContact } id="contactEmail">LinkedIn</p>
            </div>
        </div>
    )
}
export default Contact