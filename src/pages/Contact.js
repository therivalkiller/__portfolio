import React from "react";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <div>
        <div className="h-screen mt-10">
          <div className="h-4/5 bg-theme pt-20 " >
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_zhpbxxow.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              data-aos="slide-right"
            ></lottie-player>
          </div>
        </div>

        <div className="w-screen flex justify-center" data-aos="fade-up-left">
          <div className="md:w-full w-1/2 p-10 shadow-2xl bg-gray-100 z-0">
            <h1 className="text-2xl font-semibold">Contact Me.</h1>
            <input
              type="text"
              placeholder="Name"
              className="w-full border-2 border-gray-400 shadow-lg rounded mt-5 p-1"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full border-2 border-gray-400 shadow-lg rounded mt-5 p-1"
            />
            <textarea
              type="text"
              placeholder="Query"
              className="w-full border-2 border-gray-400 shadow-lg rounded mt-5 p-1"
            />

            <button className="bg-purple-400 rounded text-gray px-5 py-1 mt-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
