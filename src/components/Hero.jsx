import galaxy1 from "../assets/images/galaxy 1.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full pt-28 lg:pt-32 px-4 sm:px-6 lg:px-16 xl:px-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
        <div className="secondary-color flex flex-col gap-4">
          <h2 className="poppins-semibold text-2xl lg:text-3xl">
            Dear astronomers,
          </h2>

          <h1 className="poppins-bold text-5xl sm:text-6xl">Welcome!</h1>

          <div className="flex flex-col gap-6 text-left sm:text-justify">
            <p>
              Welcome to our astronomy club&apos;s online home! Embark on a
              cosmic journey with us as we explore the wonders of the universe.
              Uncover fascinating facts and stay tuned for celestial events in
              the vast expanse of space-time, lovingly known as cosmos.
            </p>

            <p>
              You can find out more about us, or if you want to join our
              community, simply click the button down below...
            </p>

            <div className="w-full mt-6 flex flex-col sm:flex-row justify-start lg:justify-end items-stretch sm:items-center gap-3 sm:gap-6">
              <button className="secondary-color-bg text-white py-2 px-4 rounded-xl transition-all duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-lg hover:brightness-110 active:scale-95">
                About us
              </button>
              <button className="primary-color-bg text-white py-2 px-4 rounded-xl transition-all duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-lg hover:brightness-110 active:scale-95">
                Join us
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-full h-full">
          <img
            src={galaxy1}
            alt="Galaxy illustration"
            className="w-full h-full object-cover p-12 transition-all duration-300 lg:hover:scale-[1.02] lg:hover:brightness-110"
          />
        </div>
      </div>
    </section>
  );
}
