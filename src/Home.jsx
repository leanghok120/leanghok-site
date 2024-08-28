import React from "react";
import Footer from "./Footer";

const Home = () => {
  const projects = [
    {
      name: "moody",
      description: "a simple tiling windows manager for x11 built in c",
      link: "https://github.com/leanghok120/moody",
    },
    {
      name: "digiclock",
      description: "a zen and minimal digital clock",
      link: "https://digiclock-opal.vercel.app",
    },
    {
      name: "clocky",
      description:
        "a simple CLI clock that displays the time in ascii art, meant to be a simpler alternative to tty-clock",
      link: "https://github.com/leanghok120/clocky",
    },
  ];

  const thoughts = [
    {
      title: "my linux journey",
      date: "Jul 22, 2024",
    },
  ];

  return (
    <div className="h-screen bg-gruvbox-bg0 text-gruvbox-fg0 py-12 max-w-xl mx-auto font-normal font-caskaydia">
      <h1 className="text-3xl mb-2 font-bold text-gruvbox-green">leanghok</h1>
      <p className="text-lg mb-5 text-gruvbox-fg1">
        welcome to my cozy room on the Internet where I share my thoughts and
        opinions.
      </p>

      <h2 className="text-xl mt-7 mb-2 font-bold text-gruvbox-aqua">
        about me:
      </h2>
      <p>
        hello! I'm Leanghok, a 13 year old developer. I'm currently learning
        React.
      </p>

      <h2 className="text-xl mt-7 mb-2 font-bold text-gruvbox-aqua">
        current projects:
      </h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <a
            href={project.link}
            target="_blank"
            className="text-gruvbox-blue font-bold"
          >
            {project.name}:
          </a>{" "}
          {project.description}
        </div>
      ))}

      <h2 className="text-xl mt-7 mb-2 font-bold text-gruvbox-aqua">
        my brain:
      </h2>
      {thoughts.map((thought, index) => (
        <div key={index} className="mb-4 flex justify-between">
          <a href="#" className="text-gruvbox-blue font-bold">
            {thought.title}
          </a>
          <span className="text-gruvbox-gray text-sm">{thought.date}</span>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Home;
