import { ROUTES_NAMES } from "@/app/routes";

interface IMobileNavbarData {
  url: string;
  id: number;
  title: string;
}

interface IServicesData {
  id: number;
  title: string;
  description: string;
  data?: string[];
}

interface ITestimonialsData {
  id: number;
  name: string;
  review: string;
  image: string;
  rating: number;
}

export const MobileNavbarData: IMobileNavbarData[] = [
  { id: 1, url: "/", title: ROUTES_NAMES.HOME_PAGE },
  { id: 2, url: "/services", title: ROUTES_NAMES.SERVICES },
  { id: 3, url: "/gallery", title: ROUTES_NAMES.GALLERY },
  { id: 4, url: "/testimonials", title: ROUTES_NAMES.TESTIMONIALS },
  { id: 5, url: "/contact", title: ROUTES_NAMES.CONTACT },
  { id: 6, url: "/about-us", title: ROUTES_NAMES.ABOUT_US },
];

export const servicesData: IServicesData[] = [
  {
    id: 1,
    title: "Bedroom",
    description: `Your bedroom should be a calm and relaxing place.
                 Create the haven you deserve: a true home within a home.Relax. Rest. Enjoy.`,
    data: ["Master", "Kids", "Nursery rooms"],
  },

  {
    id: 2,
    title: "Kitchen",
    description: `Preparing meals should be done in a space that is completely suited to YOU. Start spending more time with the ones you love and less time looking for that knife!`,
  },

  {
    id: 3,
    title: "Office",
    description: `Overwhelmed with papers?

 Effective filing systems can get (and keep) you on track and help you be your most efficient self.`,
    data: ["Home", "Business"],
  },

  {
    id: 4,
    title: "Bathroom",
    description:
      "Undercounter spaces can be deep and hard to utilize, often resulting in lost or forgotten items. Let's reclaim the space(s) and put them to their best use.",
  },

  {
    id: 5,
    title: "Closets",
    description: `Can't see the back wall of your closet? Can't find that second shoe? With endless solution options to choose from...let's find one!`,
    data: ["Bedroom", "Hallway", "Mudroom"],
  },

  {
    id: 6,
    title: "Laundry",
    description: `Does tackling the laundry seem like a daunting task? Don't despair.
Let's create a more efficient and effective space so that you can get it done and move on! `,
  },
];

export const testimonialData: ITestimonialsData[] = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "The Space Sort transformed my cluttered home into a serene space. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    review:
      "Excellent service! My office is now organized and efficient, thanks to their expertise.",
    rating: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "Professional and effective. My living room looks amazing and feels so much more spacious.",
    rating: 5,
  },
  {
    id: 4,
    name: "Bob Brown",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    review:
      "Great job! The team was punctual, professional, and left my home looking immaculate.",
    rating: 4,
  },
  {
    id: 5,
    name: "Charlie Davis",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "Highly satisfied with the service. They organized my garage perfectly. Worth every penny!",
    rating: 5,
  },
  {
    id: 6,
    name: "Diana Evans",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    review:
      "Amazing transformation! My kitchen is now clutter-free and so much more functional.",
    rating: 5,
  },
];
