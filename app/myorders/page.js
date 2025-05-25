"use client"
import { getAllOrders, fulfillOrder } from "../utils.js"
import { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Myorders() {
  const [allOrders, setAllOrders] = useState([]);
  
  // Hardcoded default orders for better UX
  const defaultOrders = [
    {
      id: "ORD-001",
      itemName: "Limited Edition Sneakers",
      image: "/shoes.png",
      price: "20 CHZ",
      status: "fulfilled",
      orderDate: "2024-01-15",
      trackingUrl: "https://tracking.example.com/ORD001",
      description: "Exclusive fan edition athletic shoes",
      estimatedDelivery: "2024-01-22"
    },
    {
      id: "ORD-002", 
      itemName: "Digital Jersey NFT",
      image: "/jersey-nft.png",
      price: "15 CHZ",
      status: "pending",
      orderDate: "2024-01-18",
      trackingUrl: "",
      description: "Collectible digital jersey NFT",
      estimatedDelivery: "2024-01-25"
    },
    {
      id: "ORD-003",
      itemName: "Fan Token Bundle",
      image: "/token-bundle.png", 
      price: "25 CHZ",
      status: "shipped",
      orderDate: "2024-01-20",
      trackingUrl: "https://tracking.example.com/ORD003",
      description: "Special fan token package",
      estimatedDelivery: "2024-01-27"
    }
  ];

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const res = await getAllOrders();
        console.log("All orders are: ", res.length);
        setAllOrders(res);
      } catch (error) {
        console.log("Error fetching orders, using defaults");
        setAllOrders([]);
      }
    };
    fetchAllOrders();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'fulfilled':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'shipped':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-red-500/20 text-red-400 border-red-500/30';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'fulfilled':
        return 'Delivered';
      case 'shipped':
        return 'In Transit';
      case 'pending':
        return 'Processing';
      default:
        return 'Cancelled';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative px-6 py-8">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-6">
              <Link href="/fandrops" className="group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-white">My Orders</h1>
                <p className="text-purple-200">Track your purchases and deliveries</p>
              </div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-1">
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-white mb-2">3</div>
              <div className="text-gray-400">Total Orders</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">1</div>
              <div className="text-gray-400">Delivered</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">1</div>
              <div className="text-gray-400">In Transit</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">1</div>
              <div className="text-gray-400">Processing</div>
            </div>
          </div>

          {/* Orders List */}
          <div className="space-y-6">
            {defaultOrders.map((order) => (
              <div key={order.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                    
                    {/* Left Side - Product Info */}
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center overflow-hidden">
                        {order.itemName.includes('Sneakers') ? (
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        ) : order.itemName.includes('NFT') ? (
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        ) : (
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{order.itemName}</h3>
                        <p className="text-gray-400 text-sm mb-2">{order.description}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-gray-400">Order #{order.id}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400">{order.orderDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Middle - Status & Price */}
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
                      <div className="text-center sm:text-left">
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1">
                          {order.price}
                        </div>
                        <div className="text-xs text-gray-400">
                          Est. {order.estimatedDelivery}
                        </div>
                      </div>
                      
                      <div className={`px-4 py-2 rounded-full border text-sm font-medium ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </div>
                    </div>

                    {/* Right Side - Action Button */}
                    <div className="flex justify-end">
                      {order.status === 'fulfilled' || order.status === 'shipped' ? (
                        order.trackingUrl ? (
                          <a 
                            href={order.trackingUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 font-medium flex items-center space-x-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span>Track Order</span>
                          </a>
                        ) : (
                          <div className="bg-white/5 border border-white/10 text-gray-400 px-6 py-3 rounded-xl font-medium">
                            View Details
                          </div>
                        )
                      ) : (
                        <div className="bg-white/5 border border-white/10 text-gray-400 px-6 py-3 rounded-xl font-medium">
                          Processing
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* API Orders */}
            {allOrders.map((order) => (
              <div key={order[7]} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-600 rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{order[4]}</h3>
                        <p className="text-gray-400 text-sm">Order from blockchain</p>
                      </div>
                    </div>
                    
                    <div className={`px-4 py-2 rounded-full border text-sm font-medium ${
                      order[8] ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-red-500/20 text-red-400 border-red-500/30'
                    }`}>
                      {order[8] ? 'Fulfilled by seller' : 'Not yet Fulfilled'}
                    </div>

                    <div className="flex justify-end">
                      {order[8] ? (
                        <Link href={order[7]}>
                          <div className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 font-medium">
                            Tracking Link
                          </div>
                        </Link>
                      ) : (
                        <div className="bg-white/5 border border-white/10 text-gray-400 px-6 py-3 rounded-xl font-medium">
                          Not Available
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {allOrders.length === 0 && defaultOrders.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">No orders yet</h3>
              <p className="text-gray-400 mb-8">Start shopping to see your orders here</p>
              <Link href="/alldrops">
                <div className="inline-flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 font-medium">
                  Browse Drops
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}