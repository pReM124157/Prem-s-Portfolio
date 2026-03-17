import { useState, useCallback } from "react";
import "./styles/Certifications.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    category: "Cloud Computing",
    tools: "AWS S3, EC2, Lambda, DynamoDB",
    image: "/images/Solidx.png",
    link: "https://github.com/pReM124157",
  },
  {
    title: "Google Professional Cloud Architect",
    category: "Cloud Architecture",
    tools: "GCP, Kubernetes, BigQuery, IAM",
    image: "/images/radix.png",
    link: "https://github.com/pReM124157",
  },
  {
    title: "Meta Front-End Developer",
    category: "Web Development",
    tools: "React, CSS, UX Design, HTML5",
    image: "/images/bond.png",
    link: "https://github.com/pReM124157",
  },
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  return (
    <div className="certifications-section" id="certifications">
      <div className="certifications-container section-container">
        <h2>
          My <span>Certifications</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
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

          {/* Slides */}
          <div className="carousel-track-container">
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
                        <p className="carousel-category">
                          {cert.category}
                        </p>
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

          {/* Dot Indicators */}
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
