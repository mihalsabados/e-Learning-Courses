import React  from 'react';
import "./ContentArea.css"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function ContentArea() {
    const courses = useSelector(state => state.courses)
    const [courseGroups, setCourseGroups] = useState({});

    useEffect(() => {
        setCourseGroups(groupBy(courses));
    }, [])


    const groupBy = (courses) =>{
        return courses.reduce((result, item) => {
            const catKey = item['category'];
            if (!result[catKey]) {
              result[catKey] = [];
            }
            result[catKey].push(item);
            return result;
          }, {});
    }

    const displayDate = (date) => {
        let year = date.getFullYear();
        let month = date.toLocaleString('default', { month: 'long' });
        let day = date.getDate().toString().padStart(2, '0');
        return month+" "+day+", "+year;
    }

    return (
    <div className="courses-area">
        <div className="courses-header">
            <h2>e-Learning Courses</h2>
        </div>
        {courseGroups && Object.keys(courseGroups).map((category, id)=>{
            const imageSrc = courseGroups[category][0]['imageSrc']

            return (
            <div className="course-group" key={id}>
                <div className="course-img">
                    <img src={imageSrc} alt={category}/>
                </div>
                <div className="course-list">

                    {courseGroups[category].map((course, cId)=>{
                        const circleArray = ["circle", "circle", "circle", "circle", "circle"].map(
                            (val, i)=>{
                                let elem = val;
                                if(course.progress >= i+1)
                                    elem+=" full";
                                return elem;
                            });
                        
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
                                        {circleArray.map((circleClass, cirId)=>(
                                            <div className={circleClass} key={cirId}></div>
                                        ))}
                                    </div>
                                    <p className="done-by">{course.endDate?displayDate(course.endDate):"-"}</p>
                                </div>
                            </div>

                        </div>
                        )
                    })}
                </div>
            </div>
            )
        })}

    </div>
    );
}