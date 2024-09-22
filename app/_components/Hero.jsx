import React from 'react';
// import './Hero.css'; // Ensure to create this CSS file for custom styles

function Hero() {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-background-1"></div>
        <div className="blur-background-2"></div>
      </div>
      <div>
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="hero-title">
              CollabHub is where{' '}
              <span className="highlight">work happens, in sync.</span>
            </h1>
            <p className="hero-description">
              CollabHub is a collaborative workspace that lets teams create, share, and work together
              on projects seamlessly. It combines flexible pages with reusable components that sync
              across different apps, making it easy to stay organized and up-to-date.
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="/dashboard"
                className="hero-button primary-button"
              >
                Get started
              </a>
              <a
                href="#"
                className="hero-button secondary-button"
              >
                Learn more
              </a>
            </div>
            <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The lowest price</h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The fastest on the market</h6>
                <p className="mt-2 text-gray-500">Some text here</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">The most loved</h6>
                <p className="mt-2 text-gray-500">Are You Ready!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
