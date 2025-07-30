import React from "react"
import "./About.css"

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About GPA & Credit Tracker</h1>
          <p className="about-subtitle">Helping students track their academic progress and achieve their goals.</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="https://plus.unsplash.com/premium_photo-1661395094643-0c1c8d2124db?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Students using GPA Tracker" />
            </div>
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                At GPA & Credit Tracker, we believe that every student deserves tools that make academic planning
                simpler and more effective. Our mission is to provide an intuitive platform that helps students track
                their progress, set goals, and achieve academic success.
              </p>
              <p>
                We understand the challenges students face in managing their academic journey. That's why we've created
                a tool that simplifies GPA calculation, credit tracking, and course management—all in one place.
              </p>
              <h2>Why Choose Us?</h2>
              <ul className="about-list">
                <li>Simple, intuitive interface designed for students</li>
                <li>Accurate GPA calculations using standard formulas</li>
                <li>Secure local storage of your academic data</li>
                <li>Completely free to use with no hidden fees</li>
                <li>Mobile-friendly design for on-the-go access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-image">
                <img src="https://plus.unsplash.com/premium_photo-1661286604512-b97d406bb8a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sarah Johnson" />
              </div>
              <h3>Howard Sten</h3>
              <p className="team-role">Founder & CEO</p>
              <p className="team-bio">
                Former academic advisor with a passion for educational technology. Sarah founded GPA & Credit Tracker
                after seeing students struggle with academic planning.
              </p>
            </div>
            <div className="team-member">
              <div className="team-image">
                <img src="https://plus.unsplash.com/premium_photo-1661434924855-d1b820fc459e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Michael Chen" />
              </div>
              <h3>Derek Roger</h3>
              <p className="team-role">Lead Developer</p>
              <p className="team-bio">
                Computer Science graduate with expertise in web development. Michael ensures our platform is fast,
                reliable, and user-friendly.
              </p>
            </div>
            <div className="team-member">
              <div className="team-image">
                <img src="https://plus.unsplash.com/premium_photo-1661607314718-9fbfe46bef2b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Aisha Patel" />
              </div>
              <h3>Valencuy Carter</h3>
              <p className="team-role">UX Designer</p>
              <p className="team-bio">
                With a background in psychology and design, Aisha creates intuitive user experiences that make academic
                tracking a breeze.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
