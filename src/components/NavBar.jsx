import { useState, useEffect } from "react"

import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header>

            <div className="mainMenu">
                {/* <div className="topTitle">
            <h1>Daniel Hultmark</h1> */}
                {/* </div> */}
                <div>
                    <h1 className="title">Daniel Hultmark</h1>
                    <div  className="links">
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="/CV">CV</Link>
                            <Link to="/About" className="active">About</Link>
                            <Link to="/Portfolio">Portfolio</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}