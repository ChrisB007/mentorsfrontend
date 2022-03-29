function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Hero() {
  return (
    <div className="relative">
      <main className="hero-div lg:relative shadow-md mb-2">
        <div className="mx-auto max-w-7xl w-full pt-16  text-center lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Learn by Practicing</span>
            </h1>
            <h2>
              <span className="text-4xl font-bold text-pink-700">
                with Mentors
              </span>
            </h2>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              &ldquo;Practice makes perfect&ldquo; as the saying goes, and we
              agree 100%. One true way to becoming a master at anything is by
              practicing, lots of practicing. That&lsquo;s why we have employed
              the&nbsp;
              <span className="underline decoration-pink-500">
                7–3–2–1 method
              </span>
              &nbsp; as part of our solution.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#top-categories"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                >
                  Find out more
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Join our waiting list
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <video
            autoPlay
            muted
            loop
            style={{ width: '605px', height: '521px' }}
            className="hero-video absolute inset-0 w-full h-full object-cover pr-1"
          >
            <source src="/images/tutvideo.mp4" />
          </video>
        </div>
      </main>
    </div>
  );
}
