export type NavLink = {
  href: string;
  homeHref: string;
  labelKey:
    | "experience"
    | "about"
    | "transformations"
    | "services"
    | "contact"
    | "book";
};

export const navLinks: NavLink[] = [
  { href: "/#philosophy", homeHref: "#philosophy", labelKey: "experience" },
  { href: "/about", homeHref: "/about", labelKey: "about" },
  {
    href: "/transformations",
    homeHref: "/transformations",
    labelKey: "transformations",
  },
  { href: "/services", homeHref: "/services", labelKey: "services" },
  { href: "/contact", homeHref: "/contact", labelKey: "contact" },
  { href: "/#book", homeHref: "#book", labelKey: "book" },
];
