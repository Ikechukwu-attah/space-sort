export enum ROUTES_NAMES {
  HOME_PAGE = "Home",
  ABOUT_US = "About us",
  SERVICES = "Services",
  CONTACT = "Contact",
  GALLERY = "Gallery",
  TESTIMONIALS = "Testimonials",
}

export const ROUTES: Record<string, string> = {
  [ROUTES_NAMES.HOME_PAGE]: "/",
  [ROUTES_NAMES.ABOUT_US]: "/about-us",
  [ROUTES_NAMES.SERVICES]: "/services",
  [ROUTES_NAMES.CONTACT]: "/contact",
  [ROUTES_NAMES.GALLERY]: "/gallery",
  [ROUTES_NAMES.TESTIMONIALS]: "/testimonials",
};

export const ROUTES_WITHOUT_SECONDARY_NAVBAR: string[] = [
  ROUTES[ROUTES_NAMES.HOME_PAGE],
];
