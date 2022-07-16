import { AiOutlineArrowDown } from 'react-icons/ai';
import homeImage from '../homeImage.jpg';
import { gsap } from "gsap";
import { useEffect } from 'react';

function Home()
{
    useEffect(() =>
    {
        gsap.from("#nameBackground", {duration: 1, opacity: 0});
        gsap.from("#homeTitle", {duration: 1, opacity: 0});
        gsap.from("#homeArrow", {duration: 1, opacity: 0, y: -25});
    }, [])

    //scrolls to lower page which will be projects
    function handleClickArrow(e)
    {
        console.log("clikiey")
    }

    return (
        <div id="homeContainer">
            <img src={ homeImage } id="homeImage"/>
            <div id="homeElements">
                <div id="nameBackground">
                </div>
                <div id="nameContainer">
                    <h1 id="homeTitle">Angelina White</h1>
                </div>
                <p id="homeArrow" onClick={ handleClickArrow }><AiOutlineArrowDown /></p>
            </div>
        </div>
    )
}

export default Home