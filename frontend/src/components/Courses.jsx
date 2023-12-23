// src/components/Courses.jsx
import React from 'react';

const Courses = () => {
  const coursesData = [
    {
      title: "Course Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in turpis maximus, mollis lorem id, vehicula massa.",
      image: "assets/images/course-thumb-01.jpg",
    },
    {
      title: "Course Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in turpis maximus, mollis lorem id, vehicula massa.",
      image: "assets/images/course-thumb-02.jpg",
    },
    // Add more course items as needed
  ];

  return (
    <section className="section courses" data-section="section4">
      <div className="container-fluid">
        <div className="row">
          {coursesData.map((course, index) => (
            <div key={index} className="col-md-4">
              <div className="item">
                <div className="thumb">
                  <img src={course.image} alt={course.title} />
                </div>
                <div className="info">
                  <h4>{course.title}</h4>
                  <p>{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
