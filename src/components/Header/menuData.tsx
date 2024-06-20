import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Pickup and Delivery",
    path: "/pickUpDelivery",
    newTab: false,
  },
  {
    id: 2,
    title: "Commercial Service",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Self Service locations",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
    ],
  },
];
export default menuData;
