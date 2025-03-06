"use client";

export default function Sponsore() {
  return (
    <section className="w-full">
      {/* Brand Logos Section */}
      <div className="bg-white py-8 px-4 md:px-12 flex flex-wrap justify-center items-center gap-6 md:gap-12">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Firefox_OS_wordmark.svg"
          alt="Firefox OS"
          className="h-6 md:h-10 grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google"
          className="h-6 md:h-10 grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="Microsoft"
          className="h-6 md:h-10 grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
          className="h-6 md:h-10 grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Envato_logo.png"
          alt="Envato"
          className="h-6 md:h-10 grayscale hover:grayscale-0 transition duration-300"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Themeforest_logo.png"
          alt="Themeforest"
          className="h-6 md:h-10 grayscale hover:grayscale-0 transition duration-300"
        />
      </div>

      {/* Centered Promotion Section */}
      <div className="bg-green-600 py-10 px-6 md:py-12 md:px-20 flex flex-col items-center text-center text-white gap-4">
        <h2 className="text-lg md:text-2xl font-semibold uppercase tracking-wider">
          YOUR PROMOTION TEXT WILL BE HERE
        </h2>
        <button className="border border-white px-6 py-3 text-sm md:text-lg font-medium rounded-md hover:bg-white hover:text-green-600 transition duration-300 shadow-lg">
          Purchase Now
        </button>
      </div>
    </section>
  );
}
