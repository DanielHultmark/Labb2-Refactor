import { useEffect, useState } from "react";

export default function EasterEgg({ children }) {
    const [showModal, setShowModal] = useState(false);
    const [secretBg, setSecretBg] = useState(false);

    useEffect(() => {
        let typedKeys = "";

        const handleKeyDown = (event) => {
            typedKeys += event.key;

            if (typedKeys.length > 4) {
                typedKeys = typedKeys.slice(-4);
            }

            if (typedKeys === "1337") {
                setShowModal(true);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        document.body.classList.toggle("secret-background", secretBg);
    }, [secretBg]);

    return (
        <>
            {children({
                toggleSecret: () => setSecretBg(prev => !prev)
            })}

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>🎉 Easter Egg!</h2>
                        <button onClick={() => setShowModal(false)}>
                            Stäng
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}