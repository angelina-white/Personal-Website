import { AiOutlineArrowDown } from 'react-icons/ai';
import homeImage from '../homeImage.jpg';
import { gsap } from "gsap";
import { useEffect } from 'react';

function Home()
{
    useEffect(() =>
    {
        gsap.from("#homeImage", {duration: .5, opacity: 0});
        gsap.from("#nameBackground", {delay: .25, duration: 1.5, opacity: 0});
        gsap.from("#homeTitle", {delay: .5, duration: 1.5, opacity: 0});
        gsap.from("#homeTitle2", {delay: .55, duration: 1.5, opacity: 0});
        gsap.from("#homeArrow", {delay: .75, duration: 1, opacity: 0, y: -25});
    }, [])

    //scrolls to lower page which will be projects
    function handleClickArrow(e)
    {
        console.log("clikiey")
    }

    return (
        <div id="homeContainer">
            <img src={ homeImage } alt="homeImage" id="homeImage"/>
            <div id="homeElements">
                <div id="nameBackground">
                </div>
                <div id="nameContainer">
                    <h1 id="homeTitle">Angelina White</h1>
                    <h2 id="homeTitle2">Software Developer</h2>
                </div>
                <p id="homeArrow" onClick={ handleClickArrow }><AiOutlineArrowDown /></p>
            </div>
        </div>
    )
}

export default Home