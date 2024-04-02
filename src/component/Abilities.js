import * as React from "react";

function MyAbilities() {
  const abilities = [
    {
      title: "Simple Design",
      description:
        "I try to use my design skills as simply as possible. Although I am not very confident in my abilities, but i am confident in my visual intelligence.",
    },
    {
      title: "Coding Skill",
      description:
        "I love mathematics in terms of algorithmic thinking. That's why I like to try different ways when writing code in my work.",
    },
    {
      title: "Coworking Skill",
      description: "Even though I have little experience in working together, I think I can handle it easily.",
    },
    {
      title: "Continuous Learning",
      description: "I like to embrace different variables using new technologies, methodologies and best practices.",
    },
  ];

  return (
    <div className="abilities-container">
      <h2 className="abilities-title">My Abilities</h2>
      <div className="abilities-grid">
        {abilities.map((ability, index) => (
          <div key={index} className="ability-card">
            <h3 className="ability-title">{ability.title}</h3>
            <p className="ability-description">{ability.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MyProjects() {
  const projects = [
    {
      title: "Unity 3D Shooting Game",
      imageUrl: "https://unity.com/sites/default/files/styles/cards_16_9/public/2019-11/fps-microgame.jpg?itok=DdgnGV1q",
      alt: "Project 1",
      description:"It is a game that I developed using Unity and C#, along with the information we learned at school and my own imagination."
    },
    {
      title: "Java Swing Snake Game",
      imageUrl: "https://www.coolmathgames.com/sites/default/files/Snake_OG-logo.jpg",
      alt: "Project 2",
      description: "A mini game that uses the information I learned after an hour of work, both visually and in terms of algorithm."
    },
    // Add more projects here...
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Some of My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              loading="lazy"
              src={project.imageUrl}
              alt={project.alt}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MyComponent() {
  return (
    <>
      <main className="main-container">
        <MyAbilities />
        <MyProjects />
      </main>
      <style jsx>{`
        .main-container {
          padding: 0 20px;
        }

        .abilities-container {
          max-width: 1112px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        @media (max-width: 991px) {
          .abilities-container {
            padding: 40px 20px;
          }
        }

        .abilities-title,
        .projects-title {
          color: #47d16e;
          font-size: 34px;
          font-weight: 500;
          letter-spacing: 0.25px;
          margin-bottom: 22px;
          text-align: center;
        }

        .abilities-grid {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 50px;
        }

        @media (max-width: 991px) {
          .abilities-grid {
            flex-direction: column;
            margin-top: 40px;
          }
        }

        .ability-card {
          background-color: #1f1f21;
          border-radius: 8px;
          color: #fff;
          flex-grow: 1;
          padding: 24px;
          text-align: center;
        }

        @media (max-width: 991px) {
          .ability-card {
            margin-top: 25px;
          }
        }

        .ability-title {
          font-size: 34px;
          font-weight: 500;
          letter-spacing: 0.25px;
        }

        .ability-description {
          font-size: 17px;
          line-height: 28px;
          letter-spacing: 0.44px;
          margin-top: 15px;
        }

        .projects-section {
          margin-top: 50px;
          text-align: center;
        }

        @media (max-width: 991px) {
          .projects-section {
            margin-top: 40px;
          }
        }

        .projects-container {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-top: 40px;
        }
        
        @media (max-width: 991px) {
          .projects-container {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

        .project-image {
          aspect-ratio: 1.85;
          max-width: 100%;
        }
      `}</style>
    </>
  );
}

export default MyComponent;
