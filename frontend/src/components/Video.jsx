// src/components/Video.jsx


const Video = () => {
  return (
    <section className="section video" data-section="section5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="left-content">
              <span>our presentation is for you</span>
              <h4>Watch the video to learn more <em>about Online Tutor</em></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in turpis maximus, mollis lorem id, vehicula massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in turpis maximus, mollis lorem id, vehicula massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in turpis maximus, mollis lorem id, vehicula massa.</p>
            </div>
          </div>
          <div className="col-md-6">
            <article className="video-item">
              <div className="video-caption">
                <h4>Power HTML Template</h4>
              </div>
              <figure>
                <a href="/" className="play"><img src="assets/images/main-thumb.png" alt="" /></a>
              </figure>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
