import React  from 'react';
import './Breadcrump.css';

export default function Breadcrumb() {
    return (
        <div className="breadcrumb-container">
            <div className="breadcrumb-holder">
                <p>Home Page &nbsp; {'>'} &nbsp; e-Learning Courses</p>
            </div>
            <div className="user-role">
                <p>admin</p>
            </div>
        </div>
    );
  }