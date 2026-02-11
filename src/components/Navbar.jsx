import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const LinkItem = ({ label, href, isActive = false, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className={`relative inline-block py-1 transition-opacity duration-200 hover:opacity-90 ${
        isActive ? "font-semibold" : "font-normal"
      }`}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left rounded-full primary-color-bg transition-transform duration-300 ease-out ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </a>
  );

  return (
    <nav className="w-full fixed top-0 z-50 bg-white drop-shadow-primary">
      <div className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-16 xl:px-24">
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold primary-color whitespace-nowrap transition-all duration-300 hover:cursor-pointer hover:scale-105 hover:brightness-110">
          Astrology Club
        </span>

        <div className="hidden lg:flex items-center gap-10 secondary-color">
          {navLinks.map((l) => (
            <div key={l.label} className="group">
              <LinkItem label={l.label} href={l.href} isActive={!!l.active} />
            </div>
          ))}

          <button className="primary-color-bg text-white py-2 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110 active:scale-95">
            Join us
          </button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 secondary-color hover:opacity-80"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-40 transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white drop-shadow-secondary transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col gap-6 secondary-color">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold primary-color">Menu</span>
              <button
                type="button"
                className="rounded-xl p-2 hover:opacity-80"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-4 text-base">
              {navLinks.map((l) => (
                <div key={l.label} className="group w-fit">
                  <LinkItem
                    label={l.label}
                    href={l.href}
                    isActive={!!l.active}
                    onClick={() => setOpen(false)}
                  />
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                className="w-full primary-color-bg text-white py-2 px-4 rounded-xl transition-all duration-300 hover:cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:brightness-110 active:scale-95"
                onClick={() => setOpen(false)}
              >
                Join us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
