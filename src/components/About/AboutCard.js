import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Paul Stopford </span>
            from <span className="purple"> Cape Town, South Africa</span>
            <br /> I am a fullstack web development graduate from The App Brewery.
            <br />
            I'm always eager to work with an open minded team of creative innovators and lifelong learners who are passionate about both the industry and education surrounding it, which I not only believe I can get great value from, 
            but also contribute towards. The COVID-19 pandemic presented an opportunity for me to leave the hospitality industry and work towards something that interests and excites me, as a creative problem solver. 
            I completed a fullstack web development bootcamp and numerous projects, which are detailed in my attached CV.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Music Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do or do not, there is no try"{" "}
          </p>
          <footer className="blockquote-footer">Yoda</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
