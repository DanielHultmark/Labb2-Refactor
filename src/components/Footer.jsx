import { Link } from "react-router-dom";

export default function Footer({ onSecretClick }) {
    return (
        <footer className="fotnot">
            <div className="fotlink">
                <a href="https://github.com/DanielHultmark" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/daniel-hultmark-666b7113a/" target="_blank" rel="noopener noreferrer">
                    Linked In
                </a>
            </div>

            <div>
                <h3 id="secret-footer" onClick={onSecretClick}>
                    &copy; 2026 Daniel Hultmark
                </h3>

                <h3>Epost: daniel.hultmark@outlook.com</h3>
            </div>
        </footer>
    );
}