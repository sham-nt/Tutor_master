// src/components/Features.jsx
import React from 'react';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="features-post">
              <div className="features-content">
                <div className="content-show">
                  <h4><i className="fa fa-pencil"></i>All Courses</h4>
                </div>
                <div className="content-hide">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in turpis maximus, mollis lorem id, vehicula massa.</p>
                  <p className="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                  <div className="scroll-to-section"><a href="#section2">More Info.</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="features-post second-features">
              <div className="features-content">
                <div className="content-show">
                  <h4><i className="fa fa-graduation-cap"></i>Virtual Class</h4>
                </div>
                <div className="content-hide">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in turpis maximus, mollis lorem id, vehicula massa...</p>
                  <p className="hidden-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in turpis maximus, mollis lorem id, vehicula massa.</p>
                  <div className="scroll-to-section"><a href="#section3">Details</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="features-post third-features">
              <div className="features-content">
                <div className="content-show">
                  <h4><i className="fa fa-book"></i>Real Meeting</h4>
                </div>
                <div className="content-hide">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in turpis maximus, mollis lorem id, vehicula massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in turpis maximus, mollis lorem id, vehicula massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in turpis maximus, mollis lorem id, vehicula massa.</p>
                  <p className="hidden-sm">CLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in turpis maximus, mollis lorem id, vehicula massa.</p>
                  <div className="scroll-to-section"><a href="#section4">Read More</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
