import { useState, useCallback, useRef } from "react";
import "./styles/Certifications.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const certifications = [
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    category: "Web Development",
    tools: "HTML, CSS, JavaScript, React, Node.js, MongoDB, PostgreSQL",
    image: "/images/udemy-fullstack.png",
    link: "https://ude.my/UC-cd85df4d-f8db-4c52-8203-1c9dc53d8afe",
    issuer: "Udemy",
    date: "June 19, 2025",
    hours: "61.5 total hours",
  },
  {
    title: "Database Fundamentals: Getting Started with SQL",
    category: "Database",
    tools: "SQL, Database Design, Queries, Data Management",
    image: "/images/infosys-sql.png",
    link: "https://verify.onwingspan.com",
    issuer: "Infosys Springboard",
    date: "February 6, 2026",
    hours: "",
  },
 
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? certifications.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === certifications.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? goToNext() : goToPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div className="certifications-section" id="certifications">
      <div className="certifications-container section-container">
        <h2>
          My <span>Certifications</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous certification"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next certification"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div
            className="carousel-track-container"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {certifications.map((cert, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{cert.title}</h4>
                        <p className="carousel-category">{cert.category}</p>
                        {cert.issuer && (
                          <p className="carousel-issuer">{cert.issuer}</p>
                        )}
                        {(cert.date || cert.hours) && (
                          <div className="carousel-meta">
                            {cert.date && <span>Date: <strong>{cert.date}</strong></span>}
                            {cert.hours && <span>Length: <strong>{cert.hours}</strong></span>}
                          </div>
                        )}
                        <div className="carousel-tools">
                          <span className="tools-label">AUTHORITY & HIGHLIGHTS</span>
                          <p>{cert.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={cert.image}
                        alt={cert.title}
                        link={cert.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {certifications.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to certification ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;