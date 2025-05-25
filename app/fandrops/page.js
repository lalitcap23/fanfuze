import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function Fandrops(){
  return(
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                    Stay Ahead with the{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Latest Drop
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-lg rounded-2xl transform -rotate-1"></div>
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                    Track your orders effortlessly and never miss exclusive fan experiences
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/alldrops">
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 transform group-hover:scale-105 shadow-2xl">
                        <div className="flex items-center justify-center space-x-3">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                          <span>Latest Drops</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href="/myorders">
                    <div className="group relative">
                      <div className="absolute inset-0 bg-white/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative border-2 border-white/20 hover:border-white/40 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 transform group-hover:scale-105 backdrop-blur-sm bg-white/5">
                        <div className="flex items-center justify-center space-x-3">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                          <span>My Orders</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-white mb-1">24/7</div>
                    <div className="text-sm text-gray-400">Drop Tracking</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-white mb-1">100+</div>
                    <div className="text-sm text-gray-400">Active Drops</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-white mb-1">5K+</div>
                    <div className="text-sm text-gray-400">Happy Fans</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Interactive Cards */}
              <div className="space-y-6">
                {/* Drop Preview Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-bold">
                        LIVE NOW
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Exclusive Fan Drops</h3>
                    <p className="text-gray-400 mb-6">Get access to limited edition merchandise and experiences before anyone else</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <span className="text-white font-bold">127</span> items available
                      </div>
                      <div className="text-pink-400 font-bold">Starting at 5 CHZ</div>
                    </div>
                  </div>
                </div>

                {/* Order Tracking Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-600 rounded-2xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-75"></div>
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-150"></div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Real-time Tracking</h3>
                    <p className="text-gray-400 mb-6">Monitor your orders from purchase to delivery with instant notifications</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Order #1247</span>
                        <span className="text-green-400 font-bold">Shipped</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Order #1246</span>
                        <span className="text-yellow-400 font-bold">Processing</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Community Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">Join the Community</h4>
                        <p className="text-gray-400 text-sm">Connect with fellow fans</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}