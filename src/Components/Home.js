import homeImage2 from '../images/homeImage2.jpg';
import { gsap } from "gsap";
import { useEffect } from 'react';

function Home()
{
    useEffect(() =>
    {
        //computer text typing
        var tl = gsap.timeline({delay: .25});
        tl.from("#a1", {duration: .05, opacity: 0});
        tl.from("#a2", {duration: .05, opacity: 0});
        tl.from("#a3", {duration: .05, opacity: 0});
        tl.from("#a4", {duration: .05, opacity: 0});
        tl.from("#a5", {duration: .05, opacity: 0});
        tl.from("#a6", {duration: .05, opacity: 0});
        tl.from("#a7", {duration: .05, opacity: 0});
        tl.from("#a8", {duration: .05, opacity: 0});
        tl.from("#a9", {duration: .05, opacity: 0});
        tl.from("#a10", {duration: .05, opacity: 0});
        tl.from("#a11", {duration: .05, opacity: 0});
        tl.from("#a12", {duration: .05, opacity: 0});
        tl.from("#space", {duration: .05, opacity: 0});
        tl.from("#a13", {duration: .05, opacity: 0});
        tl.from("#a14", {duration: .05, opacity: 0});
        tl.from("#a15", {duration: .05, opacity: 0});
        tl.from("#a16", {duration: .05, opacity: 0});
        tl.from("#a17", {duration: .05, opacity: 0});
        tl.from("#a18", {duration: .05, opacity: 0});
        tl.from("#a19", {duration: .05, opacity: 0});
        tl.from("#a20", {duration: .05, opacity: 0});
        tl.from("#a21", {duration: .05, opacity: 0});
        tl.from("#a22", {duration: .05, opacity: 0});
        tl.from("#a23", {duration: .05, opacity: 0, delay: .4});
        tl.from("#a24", {duration: .05, opacity: 0});
        tl.from("#a25", {duration: .05, opacity: 0});
        tl.from("#a26", {duration: .05, opacity: 0});
        tl.from("#a27", {duration: .05, opacity: 0});
        tl.from("#a28", {duration: .05, opacity: 0});
        tl.from("#a29", {duration: .05, opacity: 0});
        tl.from("#a30", {duration: .05, opacity: 0});
        tl.from("#a31", {duration: .05, opacity: 0});
        tl.from("#a32", {duration: .05, opacity: 0});
        tl.from("#a33", {duration: .05, opacity: 0});
        tl.from("#a34", {duration: .05, opacity: 0});
        tl.from("#space2", {duration: .05, opacity: 0});
        tl.from("#a35", {duration: .05, opacity: 0});
        tl.from("#a36", {duration: .05, opacity: 0});
        tl.from("#a37", {duration: .05, opacity: 0});
        tl.from("#a38", {duration: .05, opacity: 0});
        tl.from("#a39", {duration: .05, opacity: 0});
        tl.from("#a40", {duration: .05, opacity: 0});
        tl.from("#a41", {duration: .05, opacity: 0});
        tl.from("#a42", {duration: .05, opacity: 0});
        tl.from("#a43", {duration: .05, opacity: 0});
        tl.from("#a44", {duration: .05, opacity: 0});
        tl.from("#a45", {duration: .05, opacity: 0});
        tl.from("#a46", {duration: .05, opacity: 0});
        tl.from("#a47", {duration: .05, opacity: 0});
    }, [])

    const leftBrack = `<`
    const rightBrack = `>`

    return (
        <div id="homeContainer">
            <img src={ homeImage2 } alt="homeImage" id="homeImage"/>

            <div id="compWordsCont">
                <div>
                    <h2 className="compWords brackets" id="a1">{ leftBrack }</h2>
                    <h2 className="compWords h" id="a2">h</h2>
                    <h2 className="compWords h" id="a3">1</h2>
                    <h2 className="compWords brackets" id="a4">{ rightBrack }</h2>
                    <h2 className="compWords" id="a5">A</h2>
                    <h2 className="compWords" id="a6">n</h2>
                    <h2 className="compWords" id="a7">g</h2>
                    <h2 className="compWords" id="a8">e</h2>
                    <h2 className="compWords" id="a9">l</h2>
                    <h2 className="compWords" id="a10">i</h2>
                    <h2 className="compWords" id="a11">n</h2>
                    <h2 className="compWords" id="a12">a</h2>
                    <h2 className="compWords" id="space"> </h2>
                    <h2 className="compWords" id="a13">W</h2>
                    <h2 className="compWords" id="a14">h</h2>
                    <h2 className="compWords" id="a15">i</h2>
                    <h2 className="compWords" id="a16">t</h2>
                    <h2 className="compWords" id="a17">e</h2>
                    <h2 className="compWords brackets" id="a18">{ leftBrack }</h2>
                    <h2 className="compWords brackets" id="a20">/</h2>
                    <h2 className="compWords h" id="a19">h</h2>
                    <h2 className="compWords h" id="a21">1</h2>
                    <h2 className="compWords brackets" id="a22">{ rightBrack }</h2>
                </div>

                <div>
                    <h4 className="compWords brackets" id="a23">{ leftBrack }</h4>
                    <h4 className="compWords h" id="a24">h</h4>
                    <h4 className="compWords h" id="a25">3</h4>
                    <h4 className="compWords brackets" id="a26">{ rightBrack }</h4>
                    <h4 className="compWords" id="a27">S</h4>
                    <h4 className="compWords" id="a28">o</h4>
                    <h4 className="compWords" id="a29">f</h4>
                    <h4 className="compWords" id="a30">t</h4>
                    <h4 className="compWords" id="a31">w</h4>
                    <h4 className="compWords" id="a32">a</h4>
                    <h4 className="compWords" id="a33">r</h4>
                    <h4 className="compWords" id="a34">e</h4>
                    <h4 className="compWords" id="space2"> </h4>
                    <h4 className="compWords" id="a35">E</h4>
                    <h4 className="compWords" id="a36">n</h4>
                    <h4 className="compWords" id="a37">g</h4>
                    <h4 className="compWords" id="a38">i</h4>
                    <h4 className="compWords" id="a39">n</h4>
                    <h4 className="compWords" id="a40">e</h4>
                    <h4 className="compWords" id="a41">e</h4>
                    <h4 className="compWords" id="a42">r</h4>
                    <h4 className="compWords brackets" id="a43">{ leftBrack }</h4>
                    <h4 className="compWords brackets" id="a44">/</h4>
                    <h4 className="compWords h" id="a45">h</h4>
                    <h4 className="compWords h" id="a46">3</h4>
                    <h4 className="compWords brackets" id="a47">{ rightBrack }</h4>
                </div>
            </div>
        </div>
    )
}

export default Home