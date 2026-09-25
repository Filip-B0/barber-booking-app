import { useState, useEffect } from "react";
import "./Galerija.css";

const images = [
    "/gallery/1.webp",
    "/gallery/2.webp",
    "/gallery/3.webp",
    "/gallery/4.webp",
    "/gallery/5.webp",
    "/gallery/6.webp",
];

function Galerija() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const nextImage = () => {
        setSelectedIndex((selectedIndex + 1) % images.length);
    };

    const prevImage = () => {
        setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;

            if (e.key === "Escape") {
                setSelectedIndex(null);
            }

            if (e.key === "ArrowRight") {
                nextImage();
            }

            if (e.key === "ArrowLeft") {
                prevImage();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedIndex]);

    return (
        <section className="galerija">
            <h2 className="galerija-title">GALERIJA</h2>

            <div className="galerija-grid">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Frizura ${index + 1}`}
                        className="galerija-img"
                        onClick={() => setSelectedIndex(index)}
                    />
                ))}
            </div>

            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="galerija-btn"
            >
                POGLEDAJ VIŠE NA INSTAGRAMU
            </a>

            {selectedIndex !== null && (
                <div
                    className="lightbox"
                    onClick={() => setSelectedIndex(null)}
                >
                    <button
                        className="close-btn"
                        onClick={() => setSelectedIndex(null)}
                    >
                        ✕
                    </button>

                    <button
                        className="arrow left"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                    >
                        &#10094;
                    </button>

                    <img
                        src={images[selectedIndex]}
                        alt=""
                        className="lightbox-img"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        className="arrow right"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                    >
                        &#10095;
                    </button>
                </div>
            )}
        </section>
    );
}

export default Galerija;