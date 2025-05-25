import Navbar from "../../components/Navbar"
import Link from "next/link"

export default function ClubsHome() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px), 
                              radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50"></div>
        
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            
            {/* Main Heading */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
                We are transforming{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    fan loyalty
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-lg rounded-2xl"></div>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                with blockchain-powered rewards that revolutionize how fans engage with their favorite teams
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/dropslist">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform group-hover:scale-105 shadow-2xl">
                    <div className="flex items-center space-x-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                      </svg>
                      <span>List Drops</span>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/orderdetails">
                <div className="group relative">
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative border-2 border-white/20 hover:border-white/40 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform group-hover:scale-105 backdrop-blur-sm bg-white/5">
                    <div className="flex items-center space-x-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span>Manage Orders</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Lightning Fast</h3>
                  <p className="text-gray-400">Instant blockchain transactions with minimal gas fees</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Secure & Trusted</h3>
                  <p className="text-gray-400">Military-grade security with transparent blockchain technology</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Community Driven</h3>
                  <p className="text-gray-400">Built by fans, for fans, with community governance</p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">10K+</div>
                <div className="text-gray-400 font-medium">Active Fans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">500+</div>
                <div className="text-gray-400 font-medium">Drops Listed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">50+</div>
                <div className="text-gray-400 font-medium">Partner Clubs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">99.9%</div>
                <div className="text-gray-400 font-medium">Uptime</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}