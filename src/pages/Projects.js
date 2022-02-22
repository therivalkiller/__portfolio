import React from "react";
import Layout from "../components/Layout";
import projectsData from "../resources/projects";

function Projects() {
  return (
    <Layout>
      <div>
        <div className="h-screen">
          <div className="h-3/4 bg-theme pt-20 mb-10" >
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_ygiuluqn.json"
              background="transparent"
              speed="1"
              loop
              autoplay data-aos="slide-right"
            ></lottie-player>
          </div>
          

          <h1 className="text-4xl text-purple-800 font-bold text-center mt-5 mb-5 p-5 outline outline-4">
            Here are a few Projects that I have Worked on.
          </h1>
        </div>
      </div>

      <div className="grid mt-20 mb-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5" data-aos="zoom-in-down">
        {projectsData.map((projects) => {
          return (
            <div>
              <div className="relative p-5 shadow-2xl shadow-purple-300 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400" >
                <img
                  src={projects.image}
                  className="w-full h-52 text-center"
                  alt=""
                />
                
                <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 rounded-tr-3xl rounded-bl-3xl">
                  <h1 className="text-4xl font-semibold text-white">{projects.title}</h1>
                  <a href={projects.link} target="blank"><button className="border-2 rounded mt-5 border-white py-2 px-5 hover:bg-purple-500 text-white">Demo</button></a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Projects;
