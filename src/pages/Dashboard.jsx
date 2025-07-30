"use client"

import React, { useState, useEffect } from "react"
import toast from "react-hot-toast"
import CourseForm from "../components/CourseForm"
import CourseList from "../components/CourseList"
import GpaCalculator from "../components/GpaCalculator"
import CreditTracker from "../components/CreditTracker"
import "./Dashboard.css"

const Dashboard = () => {
  const [courses, setCourses] = useState([])
  const [totalCreditsRequired, setTotalCreditsRequired] = useState(120)
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState("courses")

  useEffect(() => {
    // Load user data
    const userData = localStorage.getItem("user")
    if (userData) {
      setUser(JSON.parse(userData))
    }

    // Load courses from localStorage
    const savedCourses = localStorage.getItem("courses")
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses))
    }

    // Load total credits required
    const savedTotalCredits = localStorage.getItem("totalCreditsRequired")
    if (savedTotalCredits) {
      setTotalCreditsRequired(Number.parseInt(savedTotalCredits))
    }
  }, [])

  // Save courses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses))
  }, [courses])

  // Save total credits required to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("totalCreditsRequired", totalCreditsRequired.toString())
  }, [totalCreditsRequired])

  const handleAddCourse = (course) => {
    const newCourse = {
      ...course,
      id: Date.now().toString(),
    }
    setCourses([...courses, newCourse])
    toast.success("Course added successfully!")
  }

  const handleUpdateCourse = (updatedCourse) => {
    setCourses(courses.map((course) => (course.id === updatedCourse.id ? updatedCourse : course)))
    toast.success("Course updated successfully!")
  }

  const handleDeleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course.id !== courseId))
    toast.success("Course deleted successfully!")
  }

  const handleUpdateTotalCredits = (newTotal) => {
    setTotalCreditsRequired(newTotal)
    toast.success("Total credits updated!")
  }

  const handleExport = (format) => {
    if (format === "csv") {
      // Generate CSV content
      const headers = ["Course Name", "Credits", "Grade", "Semester"]
      const csvContent = [
        headers.join(","),
        ...courses.map((course) => [course.name, course.credits, course.grade, course.semester].join(",")),
      ].join("\n")

      // Create download link
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.setAttribute("href", url)
      link.setAttribute("download", "gpa_tracker_courses.csv")
      link.style.visibility = "hidden"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast.success("Exported courses as CSV! Pls go into your downloads")
    } else {
      toast.error("Export format not supported yet.")
    }
  }

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-header">
          <h1>Welcome, {user?.name || "Student"}</h1>
          <p>Track your academic progress and calculate your GPA</p>
        </div>

        <div className="dashboard-tabs">
          <button
            className={`tab-button ${activeTab === "courses" ? "active" : ""}`}
            onClick={() => setActiveTab("courses")}
          >
            Courses
          </button>
          <button className={`tab-button ${activeTab === "gpa" ? "active" : ""}`} onClick={() => setActiveTab("gpa")}>
            GPA Calculator
          </button>
          <button
            className={`tab-button ${activeTab === "credits" ? "active" : ""}`}
            onClick={() => setActiveTab("credits")}
          >
            Credit Tracker
          </button>
        </div>

        <div className="dashboard-content">
          {activeTab === "courses" && (
            <div className="courses-tab">
              <div className="dashboard-grid">
                <div className="course-form-container">
                  <CourseForm onAddCourse={handleAddCourse} />
                </div>
                <div className="course-list-container">
                  <CourseList
                    courses={courses}
                    onUpdateCourse={handleUpdateCourse}
                    onDeleteCourse={handleDeleteCourse}
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "gpa" && (
            <div className="gpa-tab">
              <GpaCalculator courses={courses} />
            </div>
          )}

          {activeTab === "credits" && (
            <div className="credits-tab">
              <CreditTracker
                courses={courses}
                totalCreditsRequired={totalCreditsRequired}
                onUpdateTotalCredits={handleUpdateTotalCredits}
              />
            </div>
          )}
        </div>

        <div className="dashboard-actions">
          <button className="btn btn-outline" onClick={() => handleExport("csv")}>
            Export as CSV
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
