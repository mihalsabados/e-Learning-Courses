import React from 'react';
import { useSelector } from 'react-redux';

export default function ContentArea() {
  // Load courseCategories from redux store
  const courseCategories = useSelector((state) => state.courses);

  //Display date in 'MMMM dd, yyyy' format
  const displayDate = (date) => {
    let year = date.getFullYear();
    let month = date.toLocaleString('default', { month: 'long' });
    let day = date.getDate().toString().padStart(2, '0');
    return month + ' ' + day + ', ' + year;
  };

  // create array for circles className depending on courseProgress, all divs have 'circle' className and full circles have added 'full'
  const getCircleClassNames = (courseProgress) => {
    return ['circle', 'circle', 'circle', 'circle', 'circle'].map((val, i) => {
      let elem = val;
      if (courseProgress >= i + 1) elem += ' full';
      return elem;
    });
  };

  return (
    <div className="courses-area">
      <div className="courses-header">
        <h2>e-Learning Courses</h2>
      </div>
      {/* Map through course categories */}
      {courseCategories.items &&
        courseCategories.items.map((category, id) => {
          const imageSrc = category.imageSrc;

          return (
            <div className="course-group" key={id}>
              <div className="course-img">
                <img src={imageSrc} alt={category} />
              </div>
              <div className="course-list">
                {/* Map through courses in categories */}
                {category.courses.map((course, cId) => {
                  const circleArray = getCircleClassNames(course.progress);

                  return (
                    <div className="course" key={cId}>
                      <div className="course-text">
                        <p>{course.title}</p>
                      </div>
                      <div className="course-progress">
                        <div className="course-duration">
                          <p>{course.duration}min</p>
                          <p>To be done by:</p>
                        </div>
                        <div className="course-indicators">
                          <div className="course-circles">
                            {/* Map throught array for circles className */}
                            {circleArray.map((circleClass, cirId) => (
                              <div className={circleClass} key={cirId}></div>
                            ))}
                          </div>
                          <p className="done-by">
                            {course.endDate ? displayDate(course.endDate) : '-'}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
}
