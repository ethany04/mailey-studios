// lib/portfolioData.ts
export type Meta = {
  date: string;
  location: string;
  model: string;
  shootType: string;
};

export type PortfolioItem = {
  id: number;
  title: string;
  image: string;
  link: string; // slug only, e.g. "70sfall"
  meta?: Meta;
};

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "70s Fall",
    image: "/Cutouts/70s Fall.png",
    link: "70sfall",
    meta: {
      date: "23 October 2024",
      location: "Ann Arbor, MI",
      model: "Shanta Pai",
      shootType: "Editorial",
    },
  },
  {
    id: 2,
    title: "Addi",
    image: "/Cutouts/ADDI D.png",
    link: "addid",
    meta: {
      date: "",
      location: "College Station, TX",
      model: "Addi Dowlearn",
      shootType: "Editorial",
    },
  },
  {
    id: 3,
    title: "Ari",
    image: "/Cutouts/ARI G.png",
    link: "arig",
    meta: {
      date: "4 August 2025",
      location: "College Station, TX",
      model: "Ari Granda",
      shootType: "Lifestyle",
    },
  },
  {
    id: 4,
    title: "Collage Branding Shoot",
    image: "/Cutouts/Collage Branding Shoot.png",
    link: "collagebrandingshoot",
    meta: {
      date: "25 February 2025",
      location: "Ann Arbor, MI",
      model: "Anna Kaye",
      shootType: "Branding",
    },
  },
  {
    id: 5,
    title: "Elena",
    image: "/Cutouts/Elena A.png",
    link: "elenaa",
    meta: {
      date: "3 May 2025",
      location: "Old Baylor Park, TX",
      model: "Elena Alaniz",
      shootType: "Senior",
    },
  },
  {
    id: 6,
    title: "Jayden",
    image: "/Cutouts/Jayden B.png",
    link: "jaydenb",
    meta: {
      date: "22 December 2025",
      location: "College Station, TX",
      model: "Jayden Buenemann",
      shootType: "Senior Shoot",
    },
  },
  {
    id: 7,
    title: "Leah",
    image: "/Cutouts/Leah.png",
    link: "leah",
    meta: {
      date: "",
      location: "Bryan, TX",
      model: "Leah Cairnes",
      shootType: "Editorial",
    },
  },
  {
    id: 8,
    title: "Lyle",
    image: "/Cutouts/Lyle L.png",
    link: "lylel",
    meta: {
      date: "20 December 2025",
      location: "Bryan, TX",
      model: "Lyle Lewis",
      shootType: "Senior",
    },
  },
  {
    id: 9,
    title: "Mae Magazine",
    image: "/Cutouts/Mae Magazine.png",
    link: "maemagazine",
    meta: {
      date: "7 December 2024",
      location: "Ann Arbor, MI",
      model: "Ally Wang",
      shootType: "Editorial",
    },
  },
  {
    id: 10,
    title: "A/Squared Romantic Ruins",
    image: "/Cutouts/Romantic Ruins.png",
    link: "romanticruins",
    meta: {
      date: "22 February 2025",
      location: "Ann Arbor, MI",
      model: "Quinne Dowe",
      shootType: "Editorial",
    },
  },
  {
    id: 11,
    title: "Roo and the Preacher Dad",
    image: "/Cutouts/Roo and the Preacher Dad.png",
    link: "rooandthepreacherdad",
    meta: {
      date: "3 January 2025",
      location: "Bryan, TX",
      model: "Dan De Leon",
      shootType: "Branding",
    },
  },
  {
    id: 12,
    title: "Sarah",
    image: "/Cutouts/Sarah Moser.png",
    link: "sarahmoser",
    meta: {
      date: "15 August, 2024",
      location: "Old Baylor Park, TX",
      model: "Sarah Moser",
      shootType: "Senior",
    },
  },
  {
    id: 13,
    title: "Shei Magazine February '25 Issue",
    image: "/Cutouts/Shei Feb.png",
    link: "sheifeb",
    meta: {
      date: "7 December 2024",
      location: "Ann Arbor, MI",
      model: "Vivian Leech",
      shootType: "Editorial",
    },
  },
  {
    id: 14,
    title: "Smriti",
    image: "/Cutouts/Smriti.png",
    link: "smriti",
    meta: {
      date: "7 May 2025",
      location: "College Station, TX",
      model: "Smriti Kolar",
      shootType: "Senior",
    },
  },
  {
    id: 15,
    title: "Thirfted Unviersity x Bivouac Collaboration",
    image: "/Cutouts/Thirfted Unviersity x Bivouac Collaboration.png",
    link: "thrifteduniversityxbivouac",
    meta: {
      date: "1 February 2025",
      location: "Ann Arbor, MI",
      model: "Sydney Pedrosi",
      shootType: "Branding",
    },
  },
  {
    id: 16,
    title: "Thrifted Univeristy Fall 2024 Ambassadors",
    image: "/Cutouts/Thrifted Univeristy Fall 2024 Ambassadors.png",
    link: "thrifteduniversityfall2024",
    meta: {
      date: "25 October 2025",
      location: "Burns Park",
      model: "Arthurline Quaqua",
      shootType: "Branding",
    },
  },
  {
    id: 17,
    title: "Thrifted Univeristy Winter Ambassadors 2025",
    image: "/Cutouts/Thrifted Univeristy Winter Ambassadors 2025.png",
    link: "thrifteduniversitywinter2025",
    meta: {
      date: "4 February 2025",
      location: "Ann Arbor",
      model: "Alonzo Wilson",
      shootType: "Branding",
    },
  },
  {
    id: 18,
    title: "Tracy",
    image: "/Cutouts/Tracy X.png",
    link: "tracyx",
    meta: {
      date: "31 August 2024",
      location: "Ann Arbor, MI",
      model: "Tracy Xu",
      shootType: "Personal Project",
    },
  },
  {
    id: 19,
    title: "A/Squared Video Vixen",
    image: "/Cutouts/Video Vixen.png",
    link: "videovixen",
    meta: {
      date: "29 March 2025",
      location: "Ann Arbor, MI",
      model: "Stella Shor",
      shootType: "Editorial",
    },
  },
  {
    id: 20,
    title: "VIPS Fall '24 Ambassador Shoot",
    image: "/Cutouts/VIPS Fall24 Ambassador Shoot.png",
    link: "vipsfall2024",
    meta: {
      date: "8 November 2024",
      location: "Dawn Treader Library, Ann Arbor",
      model: "Olivia Rodriguez",
      shootType: "Branding",
    },
  },
  {
    id: 21,
    title: "VIPS Runway Photoshoot",
    image: "/Cutouts/VIPS Runway Photoshoot.png",
    link: "vipsrunway",
    meta: {
      date: "10 April 2025",
      location: "Ann Arbor, MI",
      model: "Alyssa",
      shootType: "Branding",
    },
  },
];
