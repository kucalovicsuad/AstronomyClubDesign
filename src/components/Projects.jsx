import InfoCard from "./InfoCard";

import photography from "../assets/images/photography 1.png";
import eclipse from "../assets/images/eclipse 1.png";
import telescope from "../assets/images/telescope 1.png";
import quiz from "../assets/images/quiz 1.png";

export default function Projects() {
  const cards = [
    {
      image: photography,
      imageAlt: "Astrophotography",
      title: "Astrophotography Gallery",
      description:
        "Showcase members' skills by creating a gallery of stunning images captured by club members. Include information about the equipment used and the story behind each photo.",
    },
    {
      image: eclipse,
      imageAlt: "Celestial Events",
      title: "Celestial Events Calendar",
      description:
        "Develop an interactive calendar that highlights upcoming celestial events, including meteor showers, eclipses, and planetary alignments. Provide information on the best times and locations for observation.",
    },
    {
      image: telescope,
      imageAlt: "Telescope Guide",
      title: "Telescope Buying Guide",
      description:
        "Create a guide to help newcomers choose the right telescope for their needs. Include reviews from club members, tips on telescope maintenance, and links to reputable vendors.",
    },
    {
      image: quiz,
      imageAlt: "Astronomy Trivia",
      title: "Astronomy Trivia and Quizzes",
      description:
        "Add a fun and interactive element to the website by including astronomy trivia and quizzes. This can be a great way to engage visitors and test their knowledge of the cosmos.",
    },
  ];

  return (
    <section
      id="projects"
      className="secondary-color-bg w-full py-12 px-4 sm:px-6 lg:px-16 xl:px-24"
    >
      <div className="text-white text-center flex flex-col gap-6">
        <h3 className="poppins-semibold uppercase text-2xl">Our projects</h3>
        <p className="poppins-light">
          If you’re interested in some astronomical things we have achieved
          check out a few of our projects...
        </p>
      </div>

      <div className="mt-16 flex flex-wrap gap-8 justify-center">
        {cards.map((c) => (
          <InfoCard
            key={c.title}
            variant="light"
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
