import contactImage from '../contactImage.jpg';

function Contact()
{

    return (
        <div id="contactContainer">
            <img src={ contactImage } id="contactImage"/>
            <div id="contactBackground"></div>
            <div id="contactPrompt">
                <h1 id="contactHeader">Contact:</h1>
                <a href="" id="contactEmail">LinkedIn</a>
            </div>
        </div>
    )
}
export default Contact