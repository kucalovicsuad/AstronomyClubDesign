import planet from "../assets/images/planet 1.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="secondary-color-bg w-full pt-12 pb-12 px-4 sm:px-6 lg:px-16 xl:px-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
        <div className="w-full h-full">
          <img
            src={planet}
            alt="Planet illustration"
            className="w-full max-w-xl mx-auto object-contain p-2 sm:p-6 lg:p-12 transition-all duration-300 lg:hover:scale-[1.02] lg:hover:brightness-110"
          />
        </div>

        <div className="text-white flex flex-col gap-6">
          <div className="text-center flex flex-col gap-3">
            <h3 className="poppins-semibold uppercase text-2xl sm:text-3xl lg:text-4xl">
              Contact us
            </h3>
            <p className="poppins-light text-sm sm:text-base">
              Have questions or feedback? Reach out to us!
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl">
            <form className="w-full flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="flex-1 py-2 px-4 rounded-xl secondary-color bg-white outline-none transition-all duration-200 border border-transparent hover:border-white/60 focus:border-white focus:ring-4 focus:ring-white/25"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="flex-1 py-2 px-4 rounded-xl secondary-color bg-white outline-none transition-all duration-200 border border-transparent hover:border-white/60 focus:border-white focus:ring-4 focus:ring-white/25"
                />
              </div>

              <input
                type="email"
                placeholder="Email address"
                className="w-full py-2 px-4 rounded-xl secondary-color bg-white outline-none transition-all duration-200 border border-transparent hover:border-white/60 focus:border-white focus:ring-4 focus:ring-white/25"
              />

              <input
                type="tel"
                placeholder="Phone number"
                className="w-full py-2 px-4 rounded-xl secondary-color bg-white outline-none transition-all duration-200 border border-transparent hover:border-white/60 focus:border-white focus:ring-4 focus:ring-white/25"
              />

              <textarea
                rows="4"
                placeholder="Type your message here..."
                className="w-full py-2 px-4 rounded-xl secondary-color bg-white resize-none outline-none transition-all duration-200 border border-transparent hover:border-white/60 focus:border-white focus:ring-4 focus:ring-white/25"
              />

              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  className="primary-color-bg text-white py-2 px-6 rounded-xl w-full sm:w-auto transition-all duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-lg hover:brightness-110 active:scale-95"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
