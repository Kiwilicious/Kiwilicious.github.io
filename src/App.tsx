import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Navbar from "./components/Navbar/Navbar";

const AppContainer = styled.div`
  margin: 0 auto;
  width: 1000px;
`;

const AppContent = styled.div`
  margin: 0 auto;
  width: 800px;
`;

const SectionContainer = styled.div`
  margin-bottom: 100px;
  line-height: 2em;
`;

const TestCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Navbar />
      <AppContent>
        <SectionContainer id="home">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          survival strategies to ensure proactive domination. At the end of the
          day, going forward, a new normal that has evolved from generation X is
          on the runway heading towards a streamlined cloud solution. User
          generated content in real-time will have multiple touchpoints for
          offshoring.
        </SectionContainer>
        <SectionContainer id="projects">
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line. Podcasting operational change management inside of
          workflows to establish a framework. Taking seamless key performance
          indicators offline to maximise the long tail. Keeping your eye on the
          ball while performing a deep dive on the start-up mentality to derive
          convergence on cross-platform integration.
        </SectionContainer>
        <SectionContainer id="test">
          Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits. Dramatically visualize customer directed convergence without
          revolutionary ROI. Efficiently unleash cross-media information without
          cross-media value. Quickly maximize timely deliverables for real-time
          schemas. Dramatically maintain clicks-and-mortar solutions without
          functional solutions. Completely synergize resource taxing
          relationships via premier niche markets. Professionally cultivate
          one-to-one customer service with robust ideas. Dynamically innovate
          resource-leveling customer service for state of the art customer
          service.
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
          Objectively innovate empowered manufactured products whereas parallel
          platforms. Holisticly predominate extensible testing procedures for
          reliable supply chains. Dramatically engage top-line web services
          vis-a-vis cutting-edge deliverables. Proactively envisioned multimedia
          based expertise and cross-media growth strategies. Seamlessly
          visualize quality intellectual capital without superior collaboration
          and idea-sharing. Holistically pontificate installed base portals
          after maintainable products. Phosfluorescently engage worldwide
          methodologies with web-enabled technology. Interactively coordinate
          proactive e-commerce via process-centric "outside the box" thinking.
          Completely pursue scalable customer service through sustainable
          potentialities.
        </SectionContainer>
      </AppContent>
    </AppContainer>
  );
};

export default App;
