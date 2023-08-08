import {
  color1,
  color2,
  color3,
  color4,
  color5,
  g1,
  g2,
  g3,
  g4,
  g5,
  person1,
  person2,
  person3,
} from "../assets/images";

const keyFeatures = [
  {
    label: "Net Weight",
    units: "lbs",
    value: "105",
  },
  {
    label: "Top Speed",
    units: "mph",
    value: "26",
  },
  {
    label: "Max Range",
    units: "miles",
    value: "38",
  },
  {
    label: "Max Torques",
    units: "nm",
    value: "89",
  },
  {
    label: "Hill Climbing",
    units: "slope",
    value: "22%",
  },
  {
    label: "Hyralic Disc Brake",
    units: "",
    value: "2x",
  },
];

const info = [
  "Lightweight aircraft grade aluminium frame",
  "Car grade lithium battery",
  "Self-balanced",
  "Plug n play",
  "Quick release adapter",
  "RFID key card",
];

const galleryImages = [g1, g2, g3, g4, g5];

const diffColors = [color1, color2, color3, color4];

const testimonialsList = [
  {
    name: "Serhiy Hipskyy",
    designation: "CEO Universal",
    image: person1,
    message:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
    rating: 5,
  },
  {
    name: "Justus Menke",
    designation: "CEO Eronaman",
    image: person2,
    message:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    rating: 5,
  },
  {
    name: "Britain Eriksen",
    designation: "CEO Universal",
    image: person3,
    message:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    rating: 5,
  },
];

const menu = [
  {
    id: "products",
    label: "PRODUCTS",
  },
  {
    id: "gallery",
    label: "GALLERY",
  },
  {
    id: "colors",
    label: "TRY COLORS",
  },
  {
    id: "review",
    label: "REVIEWS",
  },
  {
    id: "footer",
    label: "CONTACT",
  },
];

export { keyFeatures, info, galleryImages, diffColors, testimonialsList, menu };
