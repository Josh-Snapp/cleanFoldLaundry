import { Feature } from "@/types/feature";

const palmBayData = () => {
  return [
    {
      id: 1,
      title: "Recurring",
      pricing: "1.89",
      attributes: [
        { text: "Recurring $1.89/lb", status: "active" },
        { text: "1-2 Day Service", status: "active" },
        { text: "$35 minimum order", status: "active" },
      ],
    },
    {
      id: 2,
      title: "One Time",
      pricing: "2.19",
      attributes: [
        { text: "On-Demand $2.19", status: "active" },
        { text: "1-2 Day Service", status: "active" },
        { text: "$40 minimum order", status: "active" },
      ],
    },

    {
      id: 3,
      title: "Same Day",
      pricing: "2.49",
      attributes: [
        { text: "$2.49/lb Same Day Service", status: "active" },
        { text: "Pickup by 10AM - Delivery by 7PM", status: "active" },
        { text: "$50 minimum order", status: "active" },
      ],
    },
  ];
};
export default palmBayData;
