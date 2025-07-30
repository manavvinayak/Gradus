"use client"

import React, { useState } from "react"
import CourseForm from "./CourseForm"
import "./CourseList.css"

const CourseList = ({ courses, onUpdateCourse, onDeleteCourse }) => {
  const [editingCourse, setEditingCourse] = useState(null)

  const handleEdit = (course) => {
    setEditingCourse(course)
  }

  const handleCancelEdit = () => {
    setEditingCourse(null)
  }

  const handleUpdate = (updatedCourse) => {
    onUpdateCourse(updatedCourse)
    setEditingCourse(null)
  }

  return (
    <div className="course-list">
      <h2>Your Courses</h2>

      {courses.length === 0 ? (
        <div className="course-list-empty">
          <p>No courses added yet. Add your first course to get started!</p>
        </div>
      ) : (
        <div>
          <table className="course-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Credits</th>
                <th>Grade</th>
                <th>Semester</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{course.credits}</td>
                  <td>{course.grade}</td>
                  <td>{course.semester}</td>
                  <td>
                    <div className="course-actions">
                      <button
                        className="course-action-btn edit"
                        onClick={() => handleEdit(course)}
                        aria-label="Edit course"
                      >
                        ✏️
                      </button>
                      <button
                        className="course-action-btn delete"
                        onClick={() => onDeleteCourse(course.id)}
                        aria-label="Delete course"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {editingCourse && (
            <div className="edit-form-container">
              <CourseForm initialValues={editingCourse} onAddCourse={handleUpdate} onCancel={handleCancelEdit} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CourseList
