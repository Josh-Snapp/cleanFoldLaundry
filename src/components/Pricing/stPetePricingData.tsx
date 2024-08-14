import { Feature } from "@/types/feature";

const stPeteData = () => {
  return [
    {
      id: 1,
      title: "Recurring",
      pricing: "1.89",
      attributes: [
        { text: "Recurring $1.89/lb", status: "active" },
        { text: "1-2 Day Service", status: "active" },
        { text: "$30 minimum order", status: "active" },
      ],
    },
    {
      id: 2,
      title: "One Time",
      pricing: "2.09",
      attributes: [
        { text: "On-Demand $2.19", status: "active" },
        { text: "1-2 Day Service", status: "active" },
        { text: "$40 minimum order", status: "active" },
      ],
    },

    {
      id: 3,
      title: "Same Day",
      pricing: "2.39",
      attributes: [
        { text: "$2.39/lb Same Day Service", status: "active" },
        { text: "Pickup by 10AM - Delivery by 7PM", status: "active" },
        { text: "$45 minimum order", status: "active" },
      ],
    },
  ];
};
export default stPeteData;
