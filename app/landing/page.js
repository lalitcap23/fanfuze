import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// Mock functions for demonstration - replace with your actual utils
const getFanID = async () => null;
const getClubID = async () => null;

export default function Landing() {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkUserType = async () => {
      try {
        const fanId = await getFanID();
        const clubId = await getClubID();
        if (fanId) {
          console.log("fan id is ", fanId);
        } else if (clubId) {
          console.log("club id is ", clubId);
        }
      } catch (error) {
        console.log("error checking user type ", error);
      }
      setLoading(false);
    };
    checkUserType();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-blue-500 border-b-transparent rounded-full animate-spin animate-reverse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePos.x - 192,
            top: mousePos.y - 192,
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              FanFuse
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/alldrops" className="hover:text-purple-400 transition-colors">Explore Drops</a>
              <a href="/fandrops" className="hover:text-purple-400 transition-colors">Fan Drops</a>
              <a href="/myorders" className="hover:text-purple-400 transition-colors">Collection</a>
              <a href="/clubshome" className="hover:text-purple-400 transition-colors">Club Portal</a>
              <ConnectButton />
            </div>
            <button className="md:hidden text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Revolutionizing Fan Engagement
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Experience exclusive drops, rewards, and unique opportunities through blockchain-powered fan tokens. Connect directly with your favorite clubs and unlock premium experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:opacity-90 transition-all transform hover:scale-105">
                Start Exploring
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-full font-semibold text-lg hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Token-Gated Access",
                description: "Exclusive drops available only to token holders",
                icon: "🔒"
              },
              {
                title: "Flash Drops",
                description: "Time-sensitive offers for true fans",
                icon: "⚡"
              },
              {
                title: "Direct Engagement",
                description: "Connect directly with your favorite clubs",
                icon: "🤝"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "50+", label: "Partner Clubs" },
              { number: "100K+", label: "Tokens Distributed" },
              { number: "1M+", label: "Total Transactions" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                FanFuse
              </div>
              <p className="text-gray-400">
                Transforming fan engagement through blockchain technology
              </p>
            </div>
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Roadmap", "Documentation"]
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Press"]
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security", "Contact"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}