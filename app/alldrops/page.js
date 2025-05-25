"use client"
import { getAllOrders, getAllDrops, } from "../utils.js"
import { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import AllDropsCard from "../../components/Alldrops"

export default function Drops() {
  const [allDrops, setAllDrops] = useState([])
  
  // Mock data for the two new 20 CHZ items with state management
  const [featuredItems, setFeaturedItems] = useState([
    {
      id: 'featured-1',
      name: 'Limited Edition Sneakers',
      price: '20 CHZ',
      image: '/shoes.png',
      description: 'Exclusive fan edition athletic shoes',
      stock: 150
    },
    {
      id: 'featured-2', 
      name: 'Fan Token Bundle',
      price: '20 CHZ',
      image: '/token-bundle.png',
      description: 'Special fan token package',
      stock: 200
    }
  ]);

  const handleBuyNow = (itemId) => {
    setFeaturedItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId && item.stock > 0
          ? { ...item, stock: item.stock - 1 }
          : item
      )
    );
  };
  
  useEffect(() => {
    const fetchAllDrops = async () => {
      const res = await getAllDrops()
      console.log("all orders are ", res.length)
      setAllDrops(res)
    }
    fetchAllDrops()
  }, [])
  
  useEffect(() => {
    if (allDrops.length > 0) {
      console.log("Updated allDrops: ", allDrops);
    }
  }, [allDrops]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative px-6 py-8">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-4">
              <Link href="/fandrops" className="group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-white">Fan Drops</h1>
                <p className="text-purple-200">Exclusive collectibles and experiences</p>
              </div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-1">
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Items Section */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Featured Items</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {featuredItems.map((item) => (
              <div key={item.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
                      {item.id === 'featured-1' ? (
                        <img src="/shoes.png" alt="Shoes" className="w-12 h-12 object-cover" />
                      ) : (
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      )}
                    </div>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      {item.stock} left
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                      {item.price}
                    </span>
                    <button 
                      onClick={() => handleBuyNow(item.id)}
                      disabled={item.stock === 0}
                      className={`${
                        item.stock === 0 
                          ? 'bg-gray-600 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:scale-105'
                      } text-white px-6 py-2 rounded-xl transition-all duration-300 font-medium`}
                    >
                      {item.stock === 0 ? 'Sold Out' : 'Buy Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Drops Section */}
      <div className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">All Drops</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Table Header */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6">
            <div className="grid grid-cols-6 gap-4 text-center">
              <div className="text-gray-300 font-medium">Image</div>
              <div className="text-gray-300 font-medium">Drop Name</div>
              <div className="text-gray-300 font-medium">Start Date</div>
              <div className="text-gray-300 font-medium">Items Left</div>
              <div className="text-gray-300 font-medium">Eligible</div>
              <div className="text-gray-300 font-medium">Action</div>
            </div>
          </div>

          {/* Drops List */}
          <div className="space-y-4">
            {allDrops.map((e) => (
              <AllDropsCard
                key={Number(String(e[0]))}
                dropId={Number(String(e[0]))}
                productImage={e[7]}
                dropName={e[2]}
                startDate={Number(String(e[6]))}
                itemsLeft={Number(String(e[5]))}
                isEligible={"no"}
                listingClubAddress={e[1]}
                minimumFanTokenRequired={Number(String(e[3]))}
                price={String(e[8])}
              />
            ))}
          </div>

          {allDrops.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-4m-4 0H8m0 0H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No drops available</h3>
              <p className="text-gray-400">Check back later for new exclusive drops!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}