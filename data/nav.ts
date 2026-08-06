export type NavLink = {
  href: string;
  homeHref: string;
  labelKey:
    | "about"
    | "transformations"
    | "services"
    | "contact"
    | "book";
};

export const navLinks: NavLink[] = [
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
