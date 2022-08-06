import Carousel from 'react-bootstrap/Carousel';
import bt1 from '../images/bt1.png';
import bt2 from '../images/bt2.png';
import bt3 from '../images/bt3.png';
import bt4 from '../images/bt4.png';
import da1 from '../images/da1.png';
import da2 from '../images/da2.png';
import da3 from '../images/da3.png';

function PersonalProjects()
{
    const openProj1 = () => 
    {
        window.open("https://github.com/angelina-white/Map-City-Traits");
    };

    const openProj2 = () => 
    {
        window.open("https://github.com/angelina-white/Dog-Adoption");
    };



    return (
        <div id="personalProjCont">
            <h1 className="header" id="personalProjTitle">Personal Projects</h1>

            <Carousel fade className="carousel-dark carouselPers">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    id="carPhotoPers"
                    src={ bt1 }
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    id="carPhotoPers"
                    src={ bt2 }
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    id="carPhotoPers"
                    src={ bt3 }
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    id="carPhotoPers"
                    src={ bt4 }
                    alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div id="persProj1Cont"></div>
            <div id="persProj1">
                <h5 id="persDesc">User can compare different Air Force base information. Currently working on.</h5>
                <p id="persLang">React, Javascript, CSS</p>
                <p onClick={ openProj1 } id="persGit">GitHub</p>
            </div>

            <Carousel fade className="carousel-dark carouselPers" id="persProj2">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    id="carPhotoPers"
                    src={ da1 }
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    id="carPhotoPers"
                    src={ da2 }
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    id="carPhotoPers"
                    src={ da3 }
                    alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div id="persProj1Cont"></div>
            <div id="persProj1">
                <h5 id="persDesc">User can search through list of adoptable dogs and use dark mode toggle.</h5>
                <p id="persLang">React, Javascript, CSS</p>
                <p onClick={ openProj2 } id="persGit">GitHub</p>
            </div>
        </div>
    )
}
export default PersonalProjects