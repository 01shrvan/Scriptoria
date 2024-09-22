"use client";
import { useEffect, useRef } from "react";
import Typed from 'typed.js';
import Link from "next/link";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['<i>Scriptoria</i> Blogging.', '&amp; Markdown', 'Open Source'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(el.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main>
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              A <span className="font-semibold">Markdown Blogging Platform</span> for Creators <br className="hidden lg:block" />
              to Share Their <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Open source blog templates to <br className="hidden lg:block" /> kickstart your writing journey!
            </p>
            <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
              <form action="https://www.scriptoria.com/search" className="flex flex-wrap justify-between md:flex-row">
                <input
                  type="search"
                  name="query"
                  placeholder="Search Blog Posts"
                  required
                  aria-label="Search Blog Posts"
                  className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="flex items-center dark:bg-gray-800 justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <img
              src="2.svg"
              alt="Illustration of a website designer working on a blogging platform"
              className="w-full h-full max-w-md mx-auto"
            />
          </div>
        </section>

        {/* Popular Blog Categories */}
        <section className="text-white body-font">
          <div className="container px-5 py-24 mx-auto">
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-10">
              Explore Popular Blog Categories
            </h2>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-900 bg-opacity-75 px-6 pt-10 pb-16 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">MARKDOWN TUTORIALS</h2>
                  <h1 className="title-font sm:text-xl text-lg font-medium text-white mb-3">Mastering Markdown for Beginners</h1>
                  <p className="leading-relaxed mb-3">Learn the basics of markdown to write cleaner, more efficient blog posts with ease.</p>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-900 bg-opacity-75 px-6 pt-10 pb-16 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">WEB DEVELOPMENT</h2>
                  <h1 className="title-font sm:text-xl text-lg font-medium text-white mb-3">Building a Blog with Markdown</h1>
                  <p className="leading-relaxed mb-3">Use markdown to build efficient, scalable blogs with minimal code and clean formatting.</p>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-900 bg-opacity-75 px-6 pt-10 pb-16 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-white mb=1">BLOGGING TIPS</h2>
                  <h1 className="title-font sm:text-xl text-lg font-medium text-white mb=3">Optimizing Your Blog for SEO</h1>
                  <p className="leading-relaxed mb=3">Learn the best practices to optimize your markdown blogs for SEO and increase your readership.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full py-6 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center text-center gap-2 md:flex-row md:justify-between md:items-center">
              <p className="text-sm text-gray-400">
                © 2024 Scriptoria. Proudly crafted with 💻 & ❤️ by
                <span className="ml-1 text-gray-300 font-semibold hover:text-gray-100 transition-colors duration-300 ease-in-out">
                  shrvan!
                </span>
              </p>
              <p className="text-xs text-gray-500">
                A solo venture dedicated to supporting indie developers! 🌱
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}