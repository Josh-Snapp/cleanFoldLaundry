"use client";
import PageHeader from "@/components/Common/PageHeader";
import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the wash, dry, & fold process?",
      answer: `
        After you schedule a pickup, one of our CleanFold drivers will retrieve your laundry and transport it to our facility.
        Our laundry professionals will tag, spot treat, and separate your clothing by lights and darks.
        Your laundry is then washed on cold, dried on low/medium, and expertly folded.
        Everything will be wrapped in plastic for protection during delivery.
      `,
    },
    {
      question: "Do you have any hidden fees?",
      answer: `
        No! No hidden fees ever – just a flat rate per pound with NO delivery fee, NO service fees, NO extra charges at all.
      `,
    },
    {
      question:
        "Will my laundry be washed or dried with other customers' clothes?",
      answer: `
        No! Customers’ laundry is always kept in separate machines and never washed or dried with other customers’ clothes.
      `,
    },
    {
      question: "Can I give specific instructions regarding my laundry?",
      answer: `
        Yes! Our goal is to provide complete satisfaction to all of our clients. Simply communicate your specific instructions on the intake form online when you place your order. We will follow your instructions closely to ensure you get the clean and fresh laundry you desire.
      `,
    },
    {
      question: "What days do you pick up and deliver?",
      answer: `
        We operate Monday through Friday 9am - 7pm and Saturdays 9am – 12pm.
        Note: If you schedule a Friday pick-up, your laundry will be delivered on Monday (next business day).
      `,
    },
    {
      question: "I missed my pick up. Is there a missed pick up fee?",
      answer: `
        We send text reminders the day before to help make sure you don't forget. However, to cover travel costs there is a $10 Failed Pickup Fee.
      `,
    },
    {
      question: "Can I be notified when my laundry is picked up or delivered?",
      answer: `
        Absolutely. We will send text notifications every step of the way.
      `,
    },
    {
      question: "Do I have to be home when you pick up or deliver?",
      answer: `
        No. You do not need to be home. Just leave your bags at your designated pickup location for a CleanFold Laundry driver to pick up.
      `,
    },
    {
      question: "Do you offer contactless laundry pickup and delivery?",
      answer: `
        Absolutely. Because your comfort and safety are our top priority, CleanFold Laundry is proud to offer contactless pick-up and delivery. Our team members will retrieve and drop off your laundry at any designated lobby, front door, or other secure area. After we message you that it’s been delivered, you’re free to pick up the clothing without contact. Just choose the contactless option when you schedule your pick-up or delivery and we’ll be happy to accommodate.
      `,
    },
    {
      question: "Is there a delivery charge?",
      answer: `
        There is NO delivery fee, NO service fees, NO extra charges at all… just a flat rate per pound.
      `,
    },
    {
      question: "Which laundry detergents do you use?",
      answer: `
        We offer both scented and unscented (hypoallergenic) detergents. Please see our CleanFold website product menu for current options.
      `,
    },
    {
      question: "Which fabric softener do you use?",
      answer: `
        We offer both scented and unscented (hypoallergenic) softeners. Please see our CleanFold website product menu for current options.
      `,
    },
    {
      question: "Do I have to separate lights from darks?",
      answer: `
        That’s our job. Just fill your bag and we'll take care of the rest.
      `,
    },
    {
      question:
        "Do I have to separate hand-wash and dry-clean items from machine washables?",
      answer: `
        YES! Any items that require handwashing or drycleaning must be separated from items that can be machine-washed to prevent damage.
      `,
    },
    {
      question:
        "What makes CleanFold different from other laundry delivery services?",
      answer: `
        We are not just another online company that outsources services to random people. We process your laundry personally by our trained, professional staff. We have two physical locations to serve you, one in Palm Bay, FL and another in Saint Petersburg, FL. With CleanFold Laundry there is no confusion as to who is actually caring for your laundry.
      `,
    },
    {
      question: "Who is actually doing my laundry?",
      answer: `
        Your laundry is cleaned by our fully trained, professional staff in our facility. We do not outsource your laundry to random individuals like middle-man laundry apps/services.
      `,
    },
    {
      question: "What is the typical turnaround time?",
      answer: `
        Your laundry will be delivered within 24-48 business hours.
        Note: Laundry orders picked up on Friday will be delivered the following Monday.
      `,
    },
    {
      question:
        "Are there any minimum service requirements or long-term commitment contracts?",
      answer: `
        No, there are no long-term commitments. You can use the service one time or as many times as you would like. You can also schedule automatic recurring pick-ups.
      `,
    },
    {
      question: "Does laundry pickup and delivery cost extra?",
      answer: `
        No! Laundry pick-up and delivery services are FREE! Rely on CleanFold Laundry to make doing your laundry flexible, easy, and affordable. There is a $30 minimum for recurring orders and a $40 minimum for one-time orders.
      `,
    },
    {
      question: "What happens if you find personal items in pockets?",
      answer: `
        We always return valuables and anything else we find during the washing/drying process.
      `,
    },
    {
      question: "Which credit cards do you accept?",
      answer: `
        We accept MasterCard, Visa, Discover, and American Express.
      `,
    },
    {
      question:
        "What if it is raining outside? I'm afraid my clean laundry will get wet. What can I do?",
      answer: `
        When there is bad weather, we will always do our best to protect your laundry. We will do our best to put your laundry bags somewhere dry. However, we cannot be responsible for laundry that gets wet, gets lost, or gets damaged by the weather after it is dropped off at your home.
      `,
    },
    {
      question: "Do you offer coin/self-service laundry?",
      answer: `
        Yes, our self-service laundromats are open 24/7 (including all holidays) and are equipped with flat-screen TVs, free WIFI, Air Conditioning, & Food/Drink/Soap Vending Machines.
      `,
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <PageHeader
        pageName="Frequently Asked Questions"
        description="Common questions and answers about CleanFold Laundry"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-medium text-gray-800 focus:outline-none dark:text-gray-200"
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <p className="mt-2 whitespace-pre-line text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
