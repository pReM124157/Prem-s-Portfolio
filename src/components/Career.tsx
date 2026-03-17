import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Independent Builder</h4>
                <h5>Self</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started learning full-stack development and product design. Built
              early web applications while exploring AI, APIs, and modern web
              technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Systems & IoT Developer</h4>
                <h5>College Projects</h5>
              </div>
              <h3>2025 </h3>
            </div>
            <p>
              Developed college projects including InfraLink, Smart Ride Sharing
              Platform, and an IoT Smart Classroom, focusing on real-world
              systems and connected infrastructure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Product Builder</h4>
                <h5>SourceWithAI</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building SourceWithAI, an AI-powered platform to help businesses
              discover suppliers, compare products, and streamline sourcing
              workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;