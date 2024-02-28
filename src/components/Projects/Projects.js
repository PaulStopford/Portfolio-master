import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mp3player from "../../Assets/Projects/mp3player.png";
import artificiallife from "../../Assets/Projects/artificiallife.png";
import spaceinvaders from "../../Assets/Projects/spaceinvaders.png";
import particlename from "../../Assets/Projects/particlename.png";
import keeperapp from "../../Assets/Projects/keeperapp.png";
import pacman from "../../Assets/Projects/pacman.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={particlename}
              isBlog={false}
              title="Particle Name"
              description="A project displaying particle effects being dragged to create a string like effect, returning all letters back to their original positions after being dragged."
              ghLink="https://github.com/PaulStopford/Particle-Effect.git"
              demoLink="Particle-Effect/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pacman}
              isBlog={false}
              title="Pac-Man"
              description= "A remake of the old school classic arcade game PacMan."
              ghLink="https://github.com/PaulStopford/Pac-Man.git"
              demoLink="https://gh repo clone PaulStopford/Pac-Man"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spaceinvaders}
              isBlog={false}
              title="The amazing retro scifi shooter SPACE INVADERS!"
              description= ""
              ghLink="https://github.com/PaulStopford/Space-Invaders.git"
              demoLink="https://"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mp3player}
              isBlog={false}
              title="MP3 Player"
              description="A audio media player app that displays control panels and allows you to play a song of your choice."
              ghLink="https://github.com/PaulStopford/MusicPlayer-App.git"
              demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeperapp}
              isBlog={false}
              title="Note Keeper App"
              description="An application that allows you to type, store notes, and delete them when you're done using them."
              ghLink="https://github.com/PaulStopford/Keeper-App.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artificiallife}
              isBlog={false}
              title="Artificial Life Particles"
              description="Particle effects simulating life."
              ghLink="https://github.com/PaulStopford/Artificial-life-particles.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
