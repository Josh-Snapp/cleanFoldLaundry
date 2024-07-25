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
    title: "Commercial Laundry",
    path: "/commercial Laundry",
    newTab: false,
  },
  {
    id: 3,
    title: "Self Service Laundry",
    path: "/selfServiceLaundry",
    newTab: false,
  },
  {
    id: 4,
    title: "Delivery Areas",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Melbourne, FL",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "West Melbourne, FL",
        path: "/contact",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 52,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
    ],
  },
];
export default menuData;
