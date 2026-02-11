export default function InfoCard({
  variant = "dark",
  image,
  imageAlt,
  title,
  description,
  buttonText = "Find out more",
}) {
  const containerClass =
    variant === "dark"
      ? "secondary-color-bg text-center px-8 py-4 rounded-xl drop-shadow-secondary flex flex-col gap-4 w-72"
      : "bg-white text-center px-8 py-4 rounded-xl drop-shadow-primary flex flex-col gap-4 w-72";

  return (
    <div className={containerClass}>
      <div className="w-full h-40 flex justify-center items-center overflow-hidden rounded-lg">
        <img
          src={image}
          alt={imageAlt}
          className="max-h-full max-w-full object-contain transition-all duration-300 hover:scale-105 hover:brightness-110"
        />
      </div>

      <span className="poppins-semibold text-xl">{title}</span>

      <p className="line-clamp-3 poppins-light">{description}</p>

      <button className="w-full primary-color-bg text-white py-2 px-4 rounded-xl transition-all duration-300 hover:cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:brightness-110 active:scale-95">
        {buttonText}
      </button>
    </div>
  );
}
