import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-4xl font-bold leading-tight text-gray-800 dark:text-gray-200 md:text-5xl">
              Welcome to <span className="text-primary">Scriptoria</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 dark:text-gray-300">
              Your markdown blogging hub
            </p>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Write, edit, and publish your markdown blog posts with ease. Share your stories, tutorials, and insights with the world!
            </p>
            <div className="mt-8 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
              <form action="/search" className="flex flex-wrap justify-between md:flex-row">
                <input
                  type="search"
                  name="query"
                  placeholder="Search Blog Posts"
                  required
                  className="flex-1 h-12 px-4 m-1 text-gray-700 placeholder-white bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                />
                <Button
                  type="submit"
                  className="flex items-center justify-center w-full p-2 m-1 dark:bg-gray-900 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </Button>
              </form>
            </div>
          </div>
          <div className="w-full mt-8 lg:mt-0 lg:w-1/2">
            <Image
              src="2.svg"
              alt="Markdown blogging platform"
              width={500}
              height={500}
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
      </main>
    </>
  );
}