import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Hero from "../images/codesnippet.png"

export default function Home() {

    return(
        <main>
        <div className="hero">
            <div className="hero-text">
                <h2>Welcome to my CV-Portal</h2>
                <p>Here you can find information about me, my personal intrests and of course my CV.</p>
            </div>
            
            <div className="hero-image">
                <img src={Hero} className="codepic" />
            </div>
        </div>

        <div className="middlesection">
            <div className="leftmid">
                <p>
                    <a href="https://github.com/DanielHultmark">Follow my progress on GitHub, where I share my projects and code snippets</a>
                </p>
            </div>
            <div className="midmid">
                <p>
                    <Link to="./pages/portfolio">Explore my portfolio to see the projects I've worked on and the skills I've developed.</Link>
                </p>
            </div>
            <div className="rightmid">
                <p>
                    <a href="https://www.linkedin.com/in/daniel-hultmark-666b7113a/">Connect with me on LinkedIn to see my professional journey and network with me.</a>
                </p>
            </div>
        </div>
    </main>
    )
}