import React from 'react';
import './App.css';
import Header from './Component/Header.js';
import Footer from './Component/Footer.js';
import Counter from './Component/Addition.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Counter/>
        <h4>We Are A Team Of Dynamic And Experienced Professionals, Dedicated To Train People On All IT Platforms, Where People Can Make Their Career In IT Industry. We Combine Excellence With Diligence And Expertise In Our Field Which Will Guarantee The Delivery Of The Best Results. Being The Recognized And Reputed Name, We Deem Our Responsibility To Provide Best Value Of ROI. We Use Ethical And Fully-Integrated Techniques That Will Allow Our Students To Stay Ahead In The Competitive World. We Build Relationship Through World Class Services, Combination Of Innovative Digital, Creative Trends.

We Make Sure Services Are Delivered As Per The Expectations Of The Students By Experienced Faculties And At A Competitive Rate. IT TEAMWORK Has Been Operating In Maharashtra For The Last Seven Years In The Field Of IT Training And IT Services. We Have Five Centers In Maharashtra And Planning To Associate With Top Most Companies Like Reliance, Wipro, CMC, TCS, IBM And HP For Future Business</h4>
      </main>
      <Footer />
    </div>
  );
}

export default App;


