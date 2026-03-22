import { useState, useEffect } from "react"
import cvDataJson from "../cv-data.json"

import { Link } from "react-router-dom";

export default function CV() {
    const [cvData, setCvData] = useState(null);

    useEffect(() => {
        setCvData(cvDataJson);
    }, []);

    if (!cvData) {
        return <main><p>Loading CV...</p></main>;
    }

    return (
        <main>
            <section className="full-section">
                <div className="uppersect">
                    <h1>Erfarenheter</h1>
                </div>
                <div className="leftsect">
                    <h2>Information</h2>
                    <p>Regionschef med lång erfarenhet av affärsutveckling och relationsuppbyggnad
                        med bred kunskap kring avtalshantering, införsäljning samt
                        produktutbildningar. En lagspelare som gärna tar täten som lagkapten.</p>
                    <h2>Utbildning</h2>
                    <ul>
                        {cvData.education.map((edu, index) => (
                            <li key={index}>{edu}</li>
                        ))}
                    </ul>
                    <h2>Intressen</h2>
                    <ul>
                        {cvData.interests.map((interest, index) => (
                            <li key={index}>{interest}</li>
                        ))}
                    </ul>
                    <h2>Kunskap</h2>
                    <ul>
                        {cvData.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="rightsect">
                    <h2>Tidigare arbetsgivare</h2>
                    {cvData.workExperience.map((work, index) => (
                        <div key={index}>
                            <h3>{work.company}</h3>
                            <p>{work.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}