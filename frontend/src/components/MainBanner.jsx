// src/components/MainBanner.jsx
const MainBanner = () => {
  return (
    <section className="section main-banner" id="top" data-section="section1">
      <video autoPlay muted loop id="bg-video">
        <source src="assets/images/course-video.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay header-text">
        <div className="caption">
          <h6>Schedule 1 on 1 Classes</h6>
          <h2>Start your <em>First Class</em> Now</h2>
          <div className="main-button">
            <div className="scroll-to-section"><a href="#section2">LOGIN</a></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
