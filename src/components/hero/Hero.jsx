
const Hero = () => {
  return (
    <section id="home" className="py-12 md:py-20 bg-slate-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Build Your Ideal <br />
              <span className="brand-gradient-text">Development Stack</span>
            </h1>

            <p className="text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href=""
                className="btn border-none brand-gradient-bg text-white rounded-xl px-7 py-3 font-semibold hover:opacity-90 shadow-md transition-all capitalize"
              >
                Explore Technologies
              </a>
              <a
                href=""
                className="btn btn-outline border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-pink-600 rounded-xl px-7 py-3 font-semibold transition-all capitalize"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/banner-stack.png" 
              alt="DevStack banner"
              className="w-full max-w-lg h-auto object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;