import React from "react";
import Layout from "../components/Layout";

function Resume() {
  return (
    <>
      <Layout>
        <div>
          <div className="h-screen">
            <div className="h-4/5 bg-theme pt-20 ">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_4DLPlW.json"
                background="transparent"
                speed="1"
                loop
                autoplay
                data-aos="slide-right"
              ></lottie-player>
            </div>
          </div>
          <div className="md:mx-5 mx-32 shadow-2xl shadow-purple-300 bg-gray-50 rounded-lg border-4 border-purple-400 mb-20 bg-yellow-50">
            <div
              className="h-full p-5"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <div>
                <img
                  src="resume.jpg"
                  alt=""
                  className="w-full h-full text-center"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Resume;
