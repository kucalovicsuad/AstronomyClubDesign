import InfoCard from "./InfoCard";

import astronomer from "../assets/images/astronomer 1.png";
import eclipse2 from "../assets/images/eclipse (1) 1.png";
import meteor from "../assets/images/meteor-shower 1.png";
import movies from "../assets/images/movies 1.png";

export default function Events() {
  const cards = [
    {
      image: astronomer,
      imageAlt: "Astrophotography",
      title: "Stargazing Nights",
      description:
        "Regularly host stargazing events where club members and the public can come together to observe celestial objects using telescopes. Include information about the date, time, location, and featured celestial highlights.",
    },
    {
      image: eclipse2,
      imageAlt: "Celestial Events",
      title: "Lunar Eclipse Viewing Party",
      description:
        "Organize a special event centered around a lunar eclipse, providing a unique opportunity for participants to witness this celestial phenomenon. Include details about the best viewing locations and any special activities or presentations.",
    },
    {
      image: meteor,
      imageAlt: "Telescope Guide",
      title: "Meteor Shower Campout",
      description:
        "Plan an overnight camping event during a meteor shower peak. Provide information about the best locations, camping logistics, and tips for optimal meteor shower viewing.",
    },
    {
      image: movies,
      imageAlt: "Astronomy Trivia",
      title: "Astronomy Film Nights",
      description:
        "Arrange movie nights featuring astronomy-themed films or documentaries. Provide a schedule of upcoming screenings and brief synopses of the films.",
    },
  ];

  return (
    <section
      id="events"
      className="w-full py-12 px-4 sm:px-6 lg:px-16 xl:px-24"
    >
      <div className="secondary-color text-center flex flex-col gap-6">
        <h3 className="poppins-semibold uppercase text-2xl">Our events</h3>
        <p className="poppins-light">
          You can read more about a few available events we do together, and
          there are plenty more coming soon...
        </p>
      </div>

      <div className="mt-16 flex flex-wrap gap-8 justify-center text-white">
        {cards.map((c) => (
          <InfoCard
            key={c.title}
            variant="dark"
            image={c.image}
            imageAlt={c.imageAlt}
            title={c.title}
            description={c.description}
          />
        ))}
      </div>
    </section>
  );
}
