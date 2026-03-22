import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header>

            <div className="mainMenu">                
                <div>
                    <h1 className="title">Daniel Hultmark</h1>
                    <div className="links">
                        <nav>
                            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                            <NavLink to="/CV" className={({ isActive }) => isActive ? "active" : ""}>CV</NavLink>
                            <NavLink to="/About" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                            <NavLink to="/Portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}