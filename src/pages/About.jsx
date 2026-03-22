import PP from "../images/profilpic.webp"

export default function About(){
    return(
        <main>
        <div className="hero">
            <div className="about-text">
                <h1>Om mig</h1>
                <h2>Regionschef med lång erfarenhet av affärsutveckling och relationsuppbyggnad med bred kunskap kring avtalshantering, införsäljning samt produktutbildningar. En lagspelare som gärna tar täten som lagkapten.</h2>
            </div>
            
            <div className="hero-image">
                <img src={PP} className="ppic" />
            </div>
        </div>
    </main>
    )
}