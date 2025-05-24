"use client";
import { useEffect, useState } from "react";
import {
  placeOrder,
  checkDropEligiblity,
  getKayenPoolLink,
} from "../app/utils.js";

const dropsData = [
  {
    dropId: 1,
    productImage: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5c0c9f1c-0c1c-4c1c-8c1c-0c1c4c1c8c1c/air-jordan-1-high-og-shoes-86f1ZW.png",
    dropName: "Air Jordan 1 High OG",
    startDate: Math.floor(Date.now() / 1000) + 86400,
    itemsLeft: 50,
    isEligible: true,
    listingClubAddress: "0x123...",
    minimumFanTokenRequired: 100,
    price: "0.5",
    category: "Shoes"
  },
  {
    dropId: 2,
    productImage: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5c0c9f1c-0c1c-4c1c-8c1c-0c1c4c1c8c1c/air-force-1-07-shoes-WrLlWX.png",
    dropName: "Nike Air Force 1",
    startDate: Math.floor(Date.now() / 1000) + 172800,
    itemsLeft: 75,
    isEligible: true,
    listingClubAddress: "0x456...",
    minimumFanTokenRequired: 75,
    price: "0.3",
    category: "Shoes"
  },
  {
    dropId: 3,
    productImage: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5c0c9f1c-0c1c-4c1c-8c1c-0c1c4c1c8c1c/sportswear-club-fleece-hoodie-GjGXSP.png",
    dropName: "Nike Sportswear Club Fleece",
    startDate: Math.floor(Date.now() / 1000) + 259200,
    itemsLeft: 100,
    isEligible: true,
    listingClubAddress: "0x789...",
    minimumFanTokenRequired: 50,
    price: "0.2",
    category: "Apparel"
  }
];

export default function AllDropsCard({
  dropId,
  productImage,
  dropName,
  startDate,
  itemsLeft,
  isEligible,
  listingClubAddress,
  minimumFanTokenRequired,
  price,
  category
}) {
  const [itemsAvailable, setItemsAvailable] = useState(itemsLeft);
  const [isEligibleForDrop, setIsEligibleForDrop] = useState("false");
  const [kayenPoolLink, setKayenPoolLink] = useState("");

  const handlePlaceOrder = async () => {
    const res = await placeOrder(dropId, price);
    console.log("Placing order for drop op", res);
    if (res) {
      setItemsAvailable(itemsAvailable - 1);
    }
  };

  useEffect(() => {
    const checkEligiblity = async () => {
      console.log("Eligibility check called", minimumFanTokenRequired);
      const res = await checkDropEligiblity(listingClubAddress);
      console.log("Is eligible for drop", res);
      if (res) {
        if (minimumFanTokenRequired < res) {
          setIsEligibleForDrop("true");
        }
      } else {
        const poolLink = await getKayenPoolLink(listingClubAddress);
        setKayenPoolLink(poolLink);
      }
    };
    checkEligiblity();
  }, [listingClubAddress, minimumFanTokenRequired]);

  const currentDate = new Date();
  const startDateObj = new Date(startDate * 1000);

  return (
    <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-48 h-48 relative group">
          <img
            src={productImage}
            alt={dropName}
            className="w-full h-full object-cover rounded-2xl border-2 border-white/10 group-hover:border-purple-500/50 transition-all duration-300"
          />
          <div className="absolute top-2 right-2 bg-black/50 px-3 py-1 rounded-full text-sm text-white">
            {category}
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-2xl font-bold text-white">{dropName}</h3>
            <div className="flex items-center gap-2">
              <span className="text-purple-400 font-semibold">{price} CHZ</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">{itemsAvailable} left</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="text-gray-300">
              <p>Starts: {startDateObj.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
              })}</p>
              <p className="text-sm text-gray-400">Min. Tokens Required: {minimumFanTokenRequired}</p>
            </div>

            <div className="flex gap-3">
              {itemsAvailable && currentDate > startDateObj && isEligibleForDrop === "true" ? (
                <button
                  onClick={handlePlaceOrder}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-full text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  Buy Now
                </button>
              ) : isEligibleForDrop === "false" && kayenPoolLink ? (
                <a
                  href={kayenPoolLink}
                  className="bg-blue-600 px-6 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Tokens
                </a>
              ) : (
                <button className="bg-gray-600 px-6 py-2 rounded-full text-white font-semibold cursor-not-allowed">
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AllDropsList() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-white mb-8">Upcoming Drops</h2>
      <div className="grid gap-6">
        {dropsData.map((drop) => (
          <AllDropsCard key={drop.dropId} {...drop} />
        ))}
      </div>
    </div>
  );
}
