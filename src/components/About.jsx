import React from 'react'

export default function About() {
  return (
    <section className="about-section">
    <h1 className="about-title">About</h1>

    <div className="about-container">
      
      <div className="about-left">
        <div className="text-box">
          <h2>BMW CAR</h2>
          <p>
            BMW is known for its premium design, advanced technology,
            and powerful performance across all its models.
          </p>
        </div>

        <div className="text-box">
          <h2>Innovation & Performance</h2>
          <p>
            From luxury sedans to sports cars, BMW delivers a
            driving experience focused on comfort and speed.
          </p>
        </div>
      </div>

      
      <div className="about-right">
        <img src="https://images.unsplash.com/photo-1557053964-937650b63311?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Qk1XJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D" alt="BMW Car" />
      </div>
    </div>
    </section>
  )
}
