import { TypeHeader, TypeOfHamper } from "../types/type";

export const HAMPERS: TypeOfHamper[] = [
  {
    id: "gold",
    name: "GOLD",
    price: 1599,
    type: "Premium Gift Box",
    details: [
      "Ragi Choco-Almond Cookies",
      "Kaju-Jaggery Biscuits",
      "Masala Toast",
      "Nutty Bar",
      "Guilt Free Snacks",
      "Almonds, Pistachio and Cashews",
      "Along with 2 Diyas to light up your Diwali",
    ],
  },
  {
    id: "silver1",
    name: "SILVER 1",
    price: 799,
    type: "Jute Bag",
    details: [
      "Cashews",
      "Almonds",
      "Nutty bar",
      "Masala toast",
      "Ragi Choco-almond cookie",
      "Kaju Jaggery Biscuit",
      "2 Diyas",
    ],
  },
  {
    id: "silver2",
    name: "SILVER 2",
    price: 799,
    type: "Jute Bag",
    details: [
      "Cashew nuts",
      "Almonds",
      "Nutty bar",
      "Ragi Choco-Almond cookie",
      "Kaju Jaggery Biscuit",
      "Guilt Free Snack",
      "Masala Toast",
    ],
  },
  {
    id: "bronze",
    name: "BRONZE",
    price: 499,
    type: "Jute Bag",
    details: [
      "Guilt Free Snacks",
      "Nutty Bar",
      "Masala Toast",
      "Ragi Choco-Almond Cookie",
      "Kaju Jaggery Biscuit",
    ],
  },
  {
    id: "lite",
    name: "LITE",
    price: 299,
    type: "Jute Bag",
    details: ["Ragi Choco Almond cookie", "Kaju Jaggery Biscuit", "Masala Toast"],
  },
];


export const HamperHeader: TypeHeader[] = [
     {
        id:0,
        name: "S.No.",

    },
    {
        id:1,
        name: "Name",

    },
     {
        id:2,
        name: "Contact Number",

    },
      {
        id:3,
        name: "Email",

    },
      {
        id:4,
        name: "Company Name",

    },
    {
        id:5,
        name: "Company Address",

    },
    {
        id:6,
        name: "Product Name",

    },
     {
        id:7,
        name: "Quantity",

    },
     {
        id:8,
        name: "Price",

    }
]