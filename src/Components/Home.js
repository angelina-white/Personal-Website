import homeImage3 from '../images/homeImage3.jpg';
// import { gsap } from "gsap";
// import { useEffect } from 'react';

function Home()
{

    return (
        <div id="homeContainer">
            <img src={ homeImage3 } alt="homeImage" id="homeImage"/>
            <div id="titleCont">
                <h1 id="title">Angelina White</h1>
                <h2 id="titleCap">Software Developer</h2>
            </div>
        </div>
    )
}

export default Home