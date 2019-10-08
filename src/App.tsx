import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Navbar from "./components/Navbar/Navbar";

import EmailIcon from "./assets/email.svg";
import GithubIcon from "./assets/github.svg";
import LinkedinIcon from "./assets/linkedin.svg";

const AppContainer = styled.div``;

const AppContent = styled.div`
  margin: 4rem auto;
  padding: 0 1rem;
  width: 60rem;
`;

const SectionContainer = styled.div`
  margin-bottom: 4rem;
  line-height: 2rem;
`;

const SectionTitle = styled.h3`
  font-weight: 500;
  text-transform: uppercase;
`;

const TestCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ContactIconsContainer = styled.div`
  display: flex;
`;

const ContactIcon = styled.a`
  margin-right: 2rem;
  width: 50px;
  height: 50px;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Navbar />
      <AppContent>
        <SectionContainer id="home">
          <h1>James Hwang</h1>
          <h2>FullStack Web Developer</h2>
          <hr />
          <p>
            This is a simple site made in React and hosted on Github where you
            can also check out the source code. Contains some of my personal
            projects and code snippets. Feel free to reach out to me using the
            contacts posted below.
          </p>
        </SectionContainer>
        <SectionContainer id="projects">
          <SectionTitle>Projects</SectionTitle>
          <TestCardContainer>
            {new Array(10).fill(0).map((_, i) => (
              <div style={{ margin: "20px 0" }}>
                <Card
                  cardText={{
                    title: `test card ${i}`,
                    description: "yada yada yada",
                    linkUrl: "https://google.com"
                  }}
                  imageUrl={
                    "https://walkjapan.com/application/files/5514/5570/5986/hero-slide-japan.jpg"
                  }
                />
              </div>
            ))}
          </TestCardContainer>
        </SectionContainer>
        <SectionContainer id="contact">
          <SectionTitle>Contact</SectionTitle>
          <p>
            You can reach me via email and LinkedIn as well as view my profile
            over at Github.
          </p>
          <ContactIconsContainer>
            <ContactIcon
              href="mailto:jhwang137@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={EmailIcon} alt="email-icon"></img>
            </ContactIcon>
            <ContactIcon
              href="https://www.linkedin.com/in/jameshwangcali/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedinIcon} alt="linkedin-icon"></img>
            </ContactIcon>
            <ContactIcon
              href="https://github.com/Kiwilicious"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubIcon} alt="github-icon"></img>
            </ContactIcon>
          </ContactIconsContainer>
        </SectionContainer>
      </AppContent>
    </AppContainer>
  );
};

export default App;
