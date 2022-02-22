import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from "../components/Layout";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
AOS.init({
  duration: 2000
});

function Home() {
  return (
    <Layout>
      <div className="">
        {/* intro section */}
        <div className="min-h-screen bg-theme">
          <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0 border-red-400 transform rotate-12 md:rotate-0 mx-10 bg-theme">
            <div className="h-1/2">
              <lottie-player data-aos="slide-right"
                src="https://assets10.lottiefiles.com/packages/lf20_kkflmtur.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="font-bold text-white md:px-5" data-aos="slide-right">
              <h1 className="text-7xl md:text-4xl">
                Hiii, I'm <b className="text-yellow-500" >Amritanshu</b>
              </h1>
              <h1 className="text-4xl md:text-2xl">
                Full Stack <b className="text-red-500">Developer</b>
              </h1>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-20">
          <h1 className="text-6xl md:text-4xl text-blue-800 font-bold text-center my-8" data-aos="zoom-in-down">
            Technologies I Use
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-4">
            <FaReact
              size={160}
              color="cyan"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaJsSquare
              size={160}
              color="#323330"
              className="w-full text-center mt-20"
            />
            <FaNodeJs
              size={160}
              color="green"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaHtml5
              size={160}
              color="orange"
              className="w-full text-center mt-20"
            />
            <DiMongodb
              size={160}
              color="green"
              className="w-full text-center mt-20"
            />
            <FaBootstrap
              size={160}
              color="blue"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaPython
              size={160}
              color="#FFD43B"
              className="w-full text-center mt-20"
            />
            <FaCss3
              size={160}
              color="cadetblue"
              className="w-full text-center mt-20 animate-bounce"
            />
          </div>
        </div>

        {/* My Dev Stack */}
        <div className="my-20">
          <div className="text-center h-52 bg-red-500">
            <h1 className="text-purple-800 font-bold text-6xl md:text-4xl py-10" data-aos="zoom-in-down">
              My DEV Stack
            </h1>
          </div>

          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-500 border-4 border-red-400" data-aos="fade-up-right">
            <div className="h-96" >
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_pwohahvd.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="grid md:grid-cols-1 grid-cols-3 p-5">
              <div>
                <h1 className="text-gray-600 font-bold text-3xl">Frontend</h1>
                <hr />
                <p className="font-semibold mt-2 text-xl">HTML</p>
                <p className="font-semibold mt-2 text-xl">CSS</p>
                <p className="font-semibold mt-2 text-xl">Javascript</p>
                <p className="font-semibold mt-2 text-xl">React</p>
                <p className="font-semibold mt-2 text-xl">Redux</p>
              </div>
              <div className="text-center">
                <h1 className="text-gray-600 font-bold text-3xl">UI/UX</h1>
                <hr />
                <p className="font-semibold mt-2 text-xl">Bootstrap</p>
                <p className="font-semibold mt-2 text-xl">Tailwind</p>
                <p className="font-semibold mt-2 text-xl">Figma</p>
                <p className="font-semibold mt-2 text-xl">Semantic UI</p>
              </div>
              <div className="text-right md:mt-5" >
                <h1 className="text-gray-600 font-bold text-3xl">Backend and DB</h1>
                <hr />
                <p className="font-semibold mt-2 text-xl">NodeJs</p>
                <p className="font-semibold mt-2 text-xl">ExpressJs</p>
                <p className="font-semibold mt-2 text-xl">Python</p>
                <p className="font-semibold mt-2 text-xl">MongoDB</p>
                <p className="font-semibold mt-2 text-xl">MySQL</p>
              </div>
            </div>
          </div>
        </div>

        {/* DEV Info */}

        <div>
          <h1 className="text-6xl md:text-4xl text-gray-500 text-center font-bold" data-aos="zoom-in-down">
            Who is Amritanshu ?
          </h1>
          <div className="h-screen relative text-cyan-800" data-aos="zoom-in">
            <div className="h-full">
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_jwqugkrv.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="absolute inset-0 flex flex-col items-center text-center justify-center">
              <h1 className="text-2xl font-bold ">Hi, Hello, Namaste...
              <hr />

              <pre className="text-xl md:text-sm text-blue-500 my-5 font-mont font-semibold">
                {JSON.stringify({
                  Name: 'Amritanshu',
                  Place: 'Patna, Bihar',
                  College: 'IIIT Gwalior',
                  Course: 'B.Tech + M.Tech in IT',
                  Hobby: 'Watching Netflix'
                }, null , 2)}
              </pre>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
