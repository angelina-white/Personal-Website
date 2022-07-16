import construction from '../construction.jpg';

function Projects()
{
    return (
        <div id="projectsContainer">
            <h1 className="header" id="projectTitle">Projects</h1>
            <div id="projects">
                <div id="proj1Back"></div>
                <img src={ construction } className="constructionPhoto" />
                <h2 className="projHeader">Job Application Tracker</h2>
                <h3 className="projDes">Description:</h3>
                <p className="projDescription">Description goes here...</p>
                <h3 className="projLang">Languages:</h3>
                <p className="projLanguages">Languages goes here...</p>
                <a href="" className="projLinks">Demo</a>

                <div id="proj2Back"></div>
                <img src={ construction } className="constructionPhoto" />
                <h2 className="projHeader">Shop We All</h2>
                <h3 className="projDes">Description:</h3>
                <p className="projDescription">Description goes here...</p>
                <h3 className="projLang">Languages:</h3>
                <p className="projLanguages">Languages goes here...</p>
                <a href="" className="projLinks">Demo</a>

                <div id="proj3Back"></div>
                <img src={ construction } className="constructionPhoto" />
                <h2 className="projHeader">Travel Planner</h2>
                <h3 className="projDes">Description:</h3>
                <p className="projDescription">Description goes here...</p>
                <h3 className="projLang">Languages:</h3>
                <p className="projLanguages">Languages goes here...</p>
                <a href="" className="projLinks">Demo</a>
            </div>
        </div>
    )
}
export default Projects